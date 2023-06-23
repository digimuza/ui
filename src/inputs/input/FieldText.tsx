import React from "react";
import { Controller } from "react-hook-form";
import { BaseInput } from "./_internal/BaseInput";
import { InputFooter } from "./_internal/FieldFooter";
import { InputContainer } from "./_internal/InputContainer";
import { InputContextProvider } from "./_internal/InputContext";
import { Label } from "./_internal/Label";
export type FieldText = {
	name: string;
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	description?: string;
	prefix?: React.ReactNode | React.ReactNode[];
	suffix?: React.ReactNode | React.ReactNode[];
	footer?: React.ReactNode | React.ReactNode[];
	size?: "sm" | "lg";
};
export function FieldText(props: FieldText) {
	const {
		name,
		label,
		description,
		size,
		placeholder,
		disabled,
		prefix,
		suffix,
		footer,
	} = props;

	return (
		<Controller
			render={({ field, fieldState }) => {
				return (
					<InputContextProvider
						name={name}
						disabled={disabled}
						size={size}
						description={description}
						footer={footer}
						placeholder={placeholder}
						label={label}
						error={fieldState.error?.message}
					>
						<Label />
						<InputContainer prefix={prefix} suffix={suffix}>
							<BaseInput
								value={field.value ?? ""}
								onChange={field.onChange}
								onBlur={field.onBlur}
								name={field.name}
							/>
						</InputContainer>
						<InputFooter />
					</InputContextProvider>
				);
			}}
			name={name}
		/>
	);
}
