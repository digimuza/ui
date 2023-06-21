import { Controller } from "react-hook-form";
import { BaseInput } from "./_internal/BaseInput";
import { FieldFooter } from "./_internal/FieldFooter";
import { InputContainer } from "./_internal/InputContainer";
import { Label } from "./_internal/Label";
export type FieldText = {
	name: string;
	label?: string;
	placeholder?: string;
	description?: string;
	prefix?: React.ReactNode;
	suffix?: React.ReactNode;
	size?: "sm" | "lg";
};
export function FieldText(props: FieldText) {
	const { name, label, description, prefix, placeholder, suffix } = props;
	return (
		<Controller
			render={({ field, fieldState }) => {
				return (
					<div className="grow">
						{label && <Label htmlFor={`${name}-input`}>{label}</Label>}
						<InputContainer
							prefix={prefix}
							suffix={suffix}
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
						<FieldFooter variant={fieldState.error ? "error" : "default"}>
							{!fieldState.error && description}
							{fieldState.error?.message}
						</FieldFooter>
					</div>
				);
			}}
			name={name}
		/>
	);
}
