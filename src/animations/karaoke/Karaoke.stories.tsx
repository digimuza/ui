import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { KaraokeText } from "./Karaoke";

const meta: Meta = {
	title: "Animations/Karaoke",
	component: KaraokeText,
	parameters: {
		layout: "fullscreen",
		a11y: {
			config: {
				rules: [{ id: "color-contrast", enabled: false }],
			},
		},
	},
	argTypes: {
		progress: {
			control: {
				type: "range",
				step: 0.01,
				min: 0,
				max: 1,
			},
		},
	},
};

export default meta;

export const Default: StoryFn<typeof KaraokeText> = (args) => (
	<KaraokeText
		activeClassName='text-gray-900'
		className='text-3xl text-gray-100'
		{...args}
	>
		Lorem ipsum dolor sit amet, <span>consectetur</span> adipiscing elit. Mauris
		augue tellus, blandit eget tincidunt et, auctor in enim. Donec eu tellus eu
		leo congue fermentum.
	</KaraokeText>
);

Default.args = {
	progress: 0.1,
};
