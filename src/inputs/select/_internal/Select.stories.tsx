import type { Meta } from "@storybook/react";
import React from "react";
import { z } from "zod";
import { Form, useForm } from "../../form";
import { FieldSelect } from "../FieldSelect";

const meta: Meta<typeof FieldSelect> = {
	title: "Inputs/Select",
	component: FieldSelect,
	tags: ["autodocs"],
};

export default meta;

export const Default = () => {
	const form = useForm({
		schema: z.object({
			sample: z.string(),
		}),
	});
	return (
		<Form className="w-1/2 p-3" form={form}>
			<FieldSelect
				name="sample"
				label="Favorite Animal"
				trigger={<FieldSelect.Input />}
			>
				<FieldSelect.Item key="red panda">asd</FieldSelect.Item>
				<FieldSelect.Item key="cat">Cat</FieldSelect.Item>
				<FieldSelect.Item key="dog">Dog</FieldSelect.Item>
				<FieldSelect.Item key="aardvark">Aardvark</FieldSelect.Item>
				<FieldSelect.Item key="kangaroo">Kangaroo</FieldSelect.Item>
				<FieldSelect.Item key="snake">Snake</FieldSelect.Item>
			</FieldSelect>
		</Form>
	);
};
