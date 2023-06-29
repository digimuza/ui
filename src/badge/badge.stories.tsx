import { Meta } from "@storybook/react";
import React from "react";
import { generateVariationArray } from "../utils";
import { Badge } from "./badge";

const meta: Meta = {
	title: "Data Display/Badge",
	parameters: {},
};

export default meta;

export const Default = () => {
	return <Badge>Main</Badge>;
};

const combinations = generateVariationArray({
	variant: ["success", "error", "warning", "info", "gray"] as const,
});
export const All = () => {
	return (
		<div className="grid grid-cols-6 gap-3 w-1/2">
			{combinations.map((combination, index) => {
				return (
					<Badge key={`${index}`} {...combination}>
						Main
					</Badge>
				);
			})}
		</div>
	);
};
