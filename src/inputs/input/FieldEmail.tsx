import { Controller } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { Affix } from "./Affix";
import { FieldText } from "./FieldText";
import { BaseInput } from "./_internal/BaseInput";
import { FieldFooter } from "./_internal/FieldFooter";
import { InputContainer } from "./_internal/InputContainer";
import { Label } from "./_internal/Label";

export function FieldEmail(props: Omit<FieldText, "prefix" | "suffix">) {
	const { name, label, description, placeholder, size } = props;
	return (
		<Controller
			render={({ field, fieldState }) => {
				return (
					<div className="grow">
						{label && <Label htmlFor={`${name}-input`}>{label}</Label>}
						<InputContainer
							size={size}
							prefix={
								<Affix variant={"bordered"}>
									<MdAlternateEmail />
								</Affix>
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
								type="email"
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
