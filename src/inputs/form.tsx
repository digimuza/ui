import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren } from "react";
import {
	FieldValues,
	FormProvider,
	UseFormProps,
	UseFormReturn,
	useForm as useRForm,
} from "react-hook-form";
import { TypeOf, ZodType } from "zod";
export function useForm<T extends ZodType>(
	props: { schema: T } & UseFormProps<TypeOf<T>>,
) {
	return useRForm({
		...props,
		resolver: zodResolver(props.schema),
	});
}

export function Form<T extends FieldValues>(
	props: PropsWithChildren<{
		form: UseFormReturn<T, {}, undefined>;
		onSubmit?: (data: T) => Promise<void> | void;
	}> &
		Omit<
			React.DetailedHTMLProps<
				React.FormHTMLAttributes<HTMLFormElement>,
				HTMLFormElement
			>,
			"onSubmit"
		>,
) {
	const { form, onSubmit, ...rest } = props;
	return (
		<FormProvider {...form}>
			<form
				{...rest}
				onSubmit={() => {
					form.handleSubmit((data) => {
						onSubmit?.(data);
					});
				}}
			>
				{props.children}
			</form>
		</FormProvider>
	);
}
