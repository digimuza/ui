import { Meta } from "@storybook/react";
import { LibraryProvider } from "../../provider";
import { LayoutDashboard } from "./layout";

const meta: Meta = {
	title: "Layout/Dashboard",
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		(Story) => {
			return (
				<LibraryProvider>
					<Story />
				</LibraryProvider>
			);
		},
	],
};

export default meta;

export const Default = () => {
	return <LayoutDashboard />;
};
