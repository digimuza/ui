import { Meta } from "@storybook/react";
import { generateVariationArray } from "../utils/cartesianProduct";
import { Avatar } from "./avatar";

const meta: Meta = {
	title: "Data Display/Avatar",
};

export default meta;

export const Default = () => {
	return <Avatar title="Andrius Mozuraitis" gen />;
};

export const All = () => {
	const variations = generateVariationArray({
		title: ["Andrius Mozuraitis"] as const,
		gen: [true, false] as const,
		size: ["xs", "sm", "md", "lg", "xl"] as const,
		color: ["primary", "secondary", "light", "dark", "gray"] as const,
	});

	return (
		<div className="grid grid-cols-5 gap-3 ">
			{variations.map((props) => (
				<div className="flex justify-center items-center bg-gray-200 rounded-lg p-3">
					<Avatar key={props.title} {...props} />
				</div>
			))}
		</div>
	);
};
