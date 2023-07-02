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

import { ChevronDown } from "@digimuza/icons/base";
import { AnimatePresence, motion } from "framer-motion";
import { createContext } from "react";
import { Item, Section } from "react-stately";
import { AffixButton } from "../..";
import { Button } from "../../..";
import { BaseInput } from "../../input/_internal/BaseInput";
import { InputContainer } from "../../input/_internal/InputContainer";
import {
	InputContextProvider,
	useInputContext,
} from "../../input/_internal/InputContext";
import { Label } from "../../input/_internal/Label";
import { ListBox } from "./ListBox";
import { Popover } from "./PopOver";

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

const SInput = () => {
	const { isDisabled } = useInputContext();
	const { ref, select, triggerProps, state } = useSelectContext();
	const { valueProps } = select;
	const { focusProps } = useFocusRing();
	const { buttonProps } = useButton(triggerProps, ref);
	const inputProps = mergeProps(buttonProps, focusProps);
	return (
		<InputContainer
			suffix={
				<AffixButton
					variant={"link"}
					_focus={"inset"}
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
				{...inputProps}
				onFocus={() => {
					state.setFocused(true);
				}}
				onBlur={() => {
					console.log("Blur");
				}}
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
	const select = useSelect(
		{
			...props,
			onBlur: () => {
				console.log("xxx");
				// state.setFocused(false);
			},
		},
		state,
		ref,
	);

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
