import { useState } from "react";
import { Controller } from "react-hook-form";
import { Eye, EyeOff } from "../../icons/base/icons";
import { AffixButton } from "./Affix";
import { FieldText } from "./FieldText";
import { BaseInput } from "./_internal/BaseInput";
import { InputFooter } from "./_internal/FieldFooter";
import { InputContainer } from "./_internal/InputContainer";
import { InputContextProvider } from "./_internal/InputContext";
import { Label } from "./_internal/Label";

export type FieldPassword = FieldText & {
	strengthIndicator?: boolean;
};
export function FieldPassword(props: FieldPassword) {
	const {
		name,
		label,
		description,
		strengthIndicator,
		size,
		placeholder,
		footer,
		prefix,
		suffix,
		disabled,
	} = props;
	return (
		<Controller
			render={({ field, fieldState }) => {
				const [visible, setVisible] = useState(false);
				return (
					<InputContextProvider
						name={name}
						size={size}
						disabled={disabled}
						description={description}
						footer={footer}
						placeholder={placeholder ?? "•••••••••••••"}
						label={label}
						type={visible ? "text" : "password"}
						error={fieldState.error?.message}
					>
						<Label />
						<InputContainer
							prefix={prefix}
							suffix={[
								...(Array.isArray(suffix) ? suffix : [suffix ?? null]),
								<AffixButton
									disabled={disabled}
									variant={"link"}
									mode={"gray"}
									onClick={() => setVisible(!visible)}
									icon={visible ? <EyeOff /> : <Eye />}
								/>,
							]}
						>
							<BaseInput
								value={field.value ?? ""}
								onChange={field.onChange}
								onBlur={field.onBlur}
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
						<InputFooter />
					</InputContextProvider>
				);
			}}
			name={name}
		/>
	);
}
