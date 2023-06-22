import React, { PropsWithChildren } from "react";
import { Controller } from "react-hook-form";
import { Icon } from "../../icons/base";
import { AlertCircle } from "../../icons/base/icons";
import { BaseInput } from "./_internal/BaseInput";
import { FieldFooter } from "./_internal/FieldFooter";
import { InputContainer } from "./_internal/InputContainer";
import { Label } from "./_internal/Label";
export type FieldText = {
	name: string;
	label?: string;
	placeholder?: string;
	description?: string;
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	footer?: React.ReactNode;
	size?: "sm" | "lg";
};
export function FieldText(props: FieldText) {
	const {
		name,
		label,
		description,
		size,
		placeholder,
		iconLeft,
		iconRight,
		prefix,
		suffix,
		footer,
	} = props;

	return (
		<Controller
			render={({ field, fieldState }) => {
				return (
					<div className="grow relative">
						{label && <Label htmlFor={`${name}-input`}>{label}</Label>}
						<InputContainer
							prefix={
								<>
									<>
										{prefix}
										{!prefix && iconLeft && (
											<span className="h-full flex justify-center items-center border-r">
												<Icon size={size} className="mx-3">
													{iconLeft}
												</Icon>
											</span>
										)}
									</>
								</>
							}
							suffix={
								<>
									{fieldState.error && (
										<Icon className="text-error-500 mr-3">
											<AlertCircle />
										</Icon>
									)}
									{suffix}
									{!suffix && iconRight && (
										<Icon size={size} className="mr-3">
											{iconRight}
										</Icon>
									)}
								</>
							}
							variant={fieldState.error ? "error" : "default"}
						>
							<BaseInput
								placeholder={placeholder}
								id={`${name}-input`}
								value={field.value ?? ""}
								onChange={field.onChange}
								onBlur={field.onBlur}
								name={field.name}
							/>
						</InputContainer>
						{footer === undefined ? (
							<>
								{fieldState.error && (
									<FieldFooter variant={"error"}>
										{!fieldState.error && description}
										{fieldState.error?.message}
									</FieldFooter>
								)}
								{!fieldState.error && description && (
									<FieldFooter variant={"default"}>{description}</FieldFooter>
								)}
							</>
						) : (
							footer
						)}
					</div>
				);
			}}
			name={name}
		/>
	);
}

FieldText.Icon = (props: PropsWithChildren<{}>) => {
	return (
		<Icon size={"md"} className="ml-3">
			{props.children}
		</Icon>
	);
};
