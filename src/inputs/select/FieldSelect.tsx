import type { AriaSelectProps } from "@react-types/select";
import * as React from "react";

import { Controller } from "react-hook-form";
import { Select } from "./_internal/Select";

export type FieldSelect = {
	name: string;
	label?: string;
	placeholder?: string;
	isDisabled?: boolean;
	description?: string;
	prefix?: React.ReactNode | React.ReactNode[];
	suffix?: React.ReactNode | React.ReactNode[];
	footer?: React.ReactNode | React.ReactNode[];
	size?: "sm" | "lg";
};

export function FieldSelect<T>(
	props: AriaSelectProps<T> & { name: string; trigger?: React.ReactNode },
) {
	const { name, children, trigger, ...rest } = props;
	return (
		<Controller
			name={name}
			render={({ field, fieldState }) => (
				<Select
					// rome-ignore lint/suspicious/noExplicitAny: <explanation>
					{...(rest as any)}
					selectedKey={field.value}
					trigger={trigger}
					name={name}
					onBlur={field.onBlur}
					onSelectionChange={(v) => {
						field.onChange(v);
					}}
					errorMessage={fieldState.error?.message}
				>
					{/* rome-ignore lint/suspicious/noExplicitAny: <explanation> */}
					{children as any}
				</Select>
			)}
		/>
	);
}

FieldSelect.Section = Select.Section;
FieldSelect.Button = Select.Button;
FieldSelect.Item = Select.Item;
FieldSelect.Input = Select.Input;
