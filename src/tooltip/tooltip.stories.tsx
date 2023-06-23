import { Meta } from "@storybook/react";
import { Button } from "../buttons/button";
import { LibraryProvider } from "../provider";

const meta: Meta = {
	title: "Feedback/Tooltip",
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
	return <Button text="Button with tooltip" tooltip={"Hi"} />;
};
