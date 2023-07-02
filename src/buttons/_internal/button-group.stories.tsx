import { AlertCircle, CheckCircle } from "@digimuza/icons/base";
import { Meta } from "@storybook/react";
import React from "react";
import { generateVariationArray } from "../../utils/cartesianProduct";
import { Button } from "../button";
import { ButtonGroup } from "../button-group";

const meta: Meta = {
	title: "Buttons/ButtonGroup",
};

export default meta;

export const Default = () => {
	return (
		<div className="p-3">
			<ButtonGroup>
				<Button iconLeft={<CheckCircle />}>Value 1</Button>
				<Button icon={<AlertCircle />} />
				<Button variant={"primary"} mode={"destructive"}>
					Deselect
				</Button>
			</ButtonGroup>
		</div>
	);
};

const combinations = generateVariationArray({
	variant: ["primary", "secondary", "ghost"] as const,
	mode: ["default", "destructive", "gray", "success", "warning"] as const,
});

export const All = () => {
	return (
		<div className="grid grid-cols-3 gap-3">
			{combinations.map(({ mode, variant }, index) => {
				return (
					<ButtonGroup key={`sd-${index}`} variant={variant} mode={mode}>
						<Button iconLeft={<CheckCircle />} value={"sample"}>
							Value 1
						</Button>
						<Button value={"c"} icon={<AlertCircle />} />
						<Button>Deselect</Button>
					</ButtonGroup>
				);
			})}
		</div>
	);
};
