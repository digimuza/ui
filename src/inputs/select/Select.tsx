import type { AriaSelectProps } from "@react-types/select";
import * as React from "react";
import {
	AriaButtonProps,
	HiddenSelect,
	SelectAria,
	mergeProps,
	useButton,
	useFocusRing,
	useSelect,
} from "react-aria";
import { SelectState, useSelectState } from "react-stately";

import { createContext } from "react";
import { AffixButton, Button, ChevronDown } from "../..";
import {
	InputContextProvider,
	useInputContext,
} from "../input/_internal/InputContext";
import { Label } from "../input/_internal/Label";
import { ListBox } from "./_internal/ListBox";
import { Popover } from "./_internal/PopOver";

import { AnimatePresence, motion } from "framer-motion";
import { Controller } from "react-hook-form";
import { Item, Section } from "react-stately";
import { BaseInput } from "../input/_internal/BaseInput";
import { InputContainer } from "../input/_internal/InputContainer";
const SelectContext = createContext<{
	triggerProps: AriaButtonProps<"button">;
	ref: React.MutableRefObject<null>;
	select: SelectAria<unknown>;
	state: SelectState<unknown>;
} | null>(null);

function useSelectContext() {
	const context = React.useContext(SelectContext);
	if (!context) {
		throw new Error(
			"Select compound components cannot be rendered outside the Select component",
		);
	}
	return context;
}

const SInput = (
	props: React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>,
) => {
	const { isDisabled } = useInputContext();
	const { ref, select, triggerProps, state } = useSelectContext();
	const { valueProps } = select;
	const { focusProps } = useFocusRing();
	const { buttonProps } = useButton(triggerProps, ref);

	return (
		<InputContainer
			suffix={
				<AffixButton
					variant={"ghost"}
					{...valueProps}
					disabled={isDisabled}
					onClick={() => {
						state.open();
					}}
					icon={
						<motion.span
							animate={{
								rotate: !state.isOpen ? 0 : 180,
							}}
							transition={{
								duration: 0.2,
							}}
							className="w-full h-full"
						>
							<ChevronDown />
						</motion.span>
					}
				/>
			}
		>
			<BaseInput
				{...mergeProps(buttonProps, focusProps)}
				ref={ref}
				className="cursor-pointer text-left"
				value={state.selectedItem?.textValue ?? "Select an option"}
				readOnly
			/>
		</InputContainer>
	);
};

const SButton = (props: Button) => {
	const { ref, select, triggerProps, state } = useSelectContext();
	const { valueProps } = select;
	const { focusProps } = useFocusRing();
	const { buttonProps } = useButton(triggerProps, ref);
	return (
		<Button
			{...props}
			iconRight={<ChevronDown />}
			{...mergeProps(buttonProps, focusProps)}
			ref={ref}
			{...valueProps}
			text={state.selectedItem?.textValue ?? "Select an option"}
		/>
	);
};

export function Select<T extends object>(
	props: AriaSelectProps<T> & { name: string; trigger?: React.ReactNode },
) {
	// Create state based on the incoming props
	const state = useSelectState(props);
	const { errorMessage } = props;

	// Get props for child elements from useSelect
	const ref = React.useRef(null);
	const select = useSelect(props, state, ref);

	const { labelProps, triggerProps, menuProps } = select;
	const { isDisabled } = props;

	return (
		<>
			<InputContextProvider
				name={props.name}
				label={props.label}
				isDisabled={isDisabled}
				error={errorMessage}
			>
				<SelectContext.Provider
					value={{
						triggerProps,
						ref,
						select,
						state,
					}}
				>
					<Label {...labelProps} />
					<HiddenSelect
						state={state}
						isDisabled={isDisabled}
						triggerRef={ref}
						label={props.label}
						name={props.name}
					/>
					{props.trigger}
					<AnimatePresence>
						{state.isOpen && (
							<Popover
								state={state}
								triggerRef={ref}
								placement="bottom start"
								className="w-52"
							>
								<ListBox {...menuProps} state={state} />
							</Popover>
						)}
					</AnimatePresence>
				</SelectContext.Provider>
			</InputContextProvider>
		</>
	);
}

Select.Section = Section;
Select.Button = SButton;
Select.Item = Item;
Select.Input = SInput;

export type FieldSelect = {
	name: string;
	label?: string;
	placeholder?: string;
	isDisabled?: boolean;
	description?: string;
	prefix?: React.ReactNode | React.ReactNode[];
	suffix?: React.ReactNode | React.ReactNode[];
	footer?: React.ReactNode | React.ReactNode[];
	size?: "sm" | "lg";
};

export function FieldSelect<T>(
	props: AriaSelectProps<T> & { name: string; trigger?: React.ReactNode },
) {
	const { name, children, trigger } = props;
	return (
		<Controller
			name={name}
			render={({ field, fieldState }) => (
				<Select
					trigger={trigger}
					name={name}
					onBlur={field.onBlur}
					onSelectionChange={(v) => {
						field.onChange(v);
					}}
					errorMessage={fieldState.error?.message}
				>
					{/* rome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{children as any}
				</Select>
			)}
		/>
	);
}

FieldSelect.Section = Section;
FieldSelect.Button = SButton;
FieldSelect.Item = Item;
FieldSelect.Input = SInput;
