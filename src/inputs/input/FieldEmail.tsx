import { Controller } from "react-hook-form";
import { Mail } from "../../icons/base/icons";
import { Affix } from "./Affix";
import { FieldText } from "./FieldText";
import { BaseInput } from "./_internal/BaseInput";
import { InputFooter } from "./_internal/FieldFooter";
import { InputContainer } from "./_internal/InputContainer";
import { InputContextProvider } from "./_internal/InputContext";
import { Label } from "./_internal/Label";

export function FieldEmail(props: FieldText) {
	const {
		name,
		label,
		description,
		footer,
		size,
		isDisabled,
		placeholder,
		prefix,
		suffix,
	} = props;

	return (
		<Controller
			render={({ field, fieldState }) => {
				return (
					<InputContextProvider
						name={name}
						size={size}
						description={description}
						footer={footer}
						placeholder={placeholder ?? "example@example.com"}
						label={label}
						type={"email"}
						isDisabled={isDisabled}
						error={fieldState.error?.message}
					>
						<Label />
						<InputContainer
							suffix={suffix}
							prefix={prefix ?? <Affix icon={<Mail />} />}
						>
							<BaseInput
								value={field.value ?? ""}
								onChange={field.onChange}
								onBlur={field.onBlur}
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
