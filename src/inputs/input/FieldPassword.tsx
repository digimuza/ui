import { useState } from "react";
import { Controller } from "react-hook-form";
import { Affix } from ".";
import { IoMdEye, IoMdEyeOff } from "../../icons";
import { FieldText } from "./FieldText";
import { BaseInput } from "./_internal/BaseInput";
import { FieldFooter } from "./_internal/FieldFooter";
import { InputContainer } from "./_internal/InputContainer";
import { Label } from "./_internal/Label";

export type FieldPassword = Omit<
	FieldText,
	"prefix" | "suffix" | "placeholder"
> & {
	strengthIndicator?: boolean;
};
export function FieldPassword(props: FieldPassword) {
	const { name, label, description, strengthIndicator } = props;
	return (
		<Controller
			render={({ field, fieldState }) => {
				const [visible, setVisible] = useState(false);
				return (
					<div className="grow">
						{label && <Label htmlFor={`${name}-input`}>{label}</Label>}
						<InputContainer
							suffix={
								<Affix variant={"bordered"}>
									<button
										className="self-stretch"
										onClick={() => setVisible(!visible)}
										type={"button"}
									>
										{visible ? <IoMdEyeOff /> : <IoMdEye />}
									</button>
								</Affix>
							}
							variant={fieldState.error ? "error" : "default"}
						>
							<BaseInput
								placeholder={"•••••••••••••"}
								id={`${name}-input`}
								value={field.value ?? ""}
								onChange={field.onChange}
								onBlur={field.onBlur}
								name={field.name}
								type={visible ? "text" : "password"}
							/>
							{strengthIndicator && (
								<div className="h-1 bg-gray-100 w-full">
									<div
										style={{ width: "40%" }}
										className="bg-green-500 h-full"
									/>
								</div>
							)}
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