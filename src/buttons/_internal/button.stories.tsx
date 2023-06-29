import type { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Package } from "../../icons/base/icons";
import { generateVariationArray } from "../../utils/cartesianProduct";
import { Button } from "../button";

const meta: Meta<typeof Button> = {
	title: "Buttons/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		text: {
			control: { type: "text" },
			description: "Button text",
			defaultValue: "Button",
		},
		variant: {
			options: ["primary", "secondary", "ghost", "link"],
			defaultValue: "primary",
			control: { type: "radio" },
		},
		mode: {
			options: ["default", "destructive", "gray", "success", "warning"],
			defaultValue: "default",
			control: { type: "radio" },
		},
		size: {
			options: ["xs", "sm", "md", "lg", "xl"],
			defaultValue: "md",
		},
		disabled: {
			control: { type: "boolean" },
			defaultValue: false,
			description: "Button disabled state",
		},
	},
};

export default meta;

export const Default: StoryFn<typeof Button> = (args) => {
	return <Button text="Button" iconLeft={<Package />} {...args} />;
};

const combinations = generateVariationArray({
	variant: ["primary", "secondary", "ghost", "link"] as const,
	mode: ["default", "destructive", "gray", "success", "warning"] as const,
	text: ["Button"] as const,
	iconLeft: [undefined, <Package />] as const,
	icon: [undefined, <Package />] as const,
}).filter(({ iconLeft, icon }) => {
	if (iconLeft && icon) return false;
	return true;
});
export const All = () => {
	return (
		<div className="grid grid-cols-6 gap-3">
			{combinations.map((combination, index) => {
				return <Button key={`${index}`} {...combination} />;
			})}
		</div>
	);
};
