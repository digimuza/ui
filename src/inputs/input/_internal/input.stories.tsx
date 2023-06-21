import type { Meta } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Affix } from "../Affix";
import { FieldEmail } from "../FieldEmail";
import { FieldPassword } from "../FieldPassword";
import { FieldText } from "../FieldText";

const meta = {
	title: "Inputs/Input",
	component: FieldText,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ["autodocs"],
} satisfies Meta<typeof FieldText>;

export default meta;

export function InputStory() {
	const form = useForm();
	return (
		<>
			<FormProvider {...form}>
				<div className="flex space-x-3 w-full">
					<FieldText placeholder="John" label="First name" name="firstName" />
					<FieldText placeholder="Jonathan" label="Last name" name="lastName" />
				</div>
				<FieldEmail
					label="Email"
					name="email"
					placeholder="example@example.com"
				/>
				<FieldPassword
					label="Password"
					name="password"
					description="This is a description that will be shown below the input."
					strengthIndicator
				/>
				<FieldText
					label="Phone number"
					name="phoneNumber"
					placeholder="+370 XXX XXX XX"
				/>
				<FieldText
					label="URL"
					name="url"
					description="This is a description that will be shown below the input."
					placeholder="example.com"
					prefix={<Affix variant={"bordered"}>https://</Affix>}
				/>
			</FormProvider>
		</>
	);
}
