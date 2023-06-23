import { Meta, StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Affix, FieldEmail, FieldText } from "..";
import { Button } from "../../../buttons/button";
import { AlertCircle, Check, User } from "../../../icons/base/icons";
import { FieldPassword } from "../FieldPassword";

const meta: Meta = {
	title: "Inputs/Input",
	component: FieldText,
	decorators: [
		(Story) => {
			const form = useForm();
			return (
				<FormProvider {...form}>
					<div className="flex w-full space-x-3 mt-6 justify-start items-start">
						<div className="basis-1/2">
							<div>
								<Story />
							</div>
							<div className="mt-8 flex space-x-3">
								<Button
									iconRight={<AlertCircle />}
									size={"md"}
									text="Reset error"
									onClick={() => {
										form.clearErrors("name");
									}}
									mode={"success"}
								/>
								<Button
									iconRight={<Check />}
									text="Set error"
									onClick={() => {
										form.setError("name", {
											message: "This is an error",
										});
									}}
									mode={"destructive"}
								/>
							</div>
						</div>

						<div className="basis-1/2 rounded-md bg-gray-100 p-3">
							<pre>{JSON.stringify(form.watch(), null, 2)}</pre>
						</div>
					</div>
				</FormProvider>
			);
		},
	],
};

export default meta;

export const Default: StoryFn<typeof FieldText> = () => {
	return (
		<div className="flex flex-col space-y-8">
			<FieldText
				prefix={<Affix icon={<User />} />}
				label="Name"
				placeholder="sample"
				name="name"
			/>
			<FieldPassword name="password" label="Sample" />
			<FieldEmail label="Email" description="You company email" name="email" />
		</div>
	);
};
