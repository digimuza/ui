import * as Icons from "@digimuza/icons/base";
import { Meta } from "@storybook/react";
import React, { useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button } from "../../../buttons/button";
import { Affix, FieldText } from "../../../inputs/input";

const meta: Meta = {
	title: "Icons/Base",
	parameters: {
		layout: "fullscreen",
	},
};

export default meta;

export const All = () => {
	const form = useForm<{ search: string }>();
	const search = form.watch("search");

	const items = useMemo(
		() =>
			Object.entries(Icons).filter(([k]) => {
				return k.toLowerCase().includes(search?.toLowerCase() || "");
			}),
		[search],
	);
	return (
		<FormProvider {...form}>
			<div className="h-screen overflow-scroll">
				<div className="absolute top-0 p-2 shadow-md bg-white w-full">
					<FieldText
						footer={null}
						name="search"
						placeholder="Search"
						prefix={<Affix icon={<Icons.Search />} />}
					/>
				</div>

				<div className="grid mt-20 grid-cols-4 gap-2 text-primary-700 p-3">
					{items.map(([key, Icon]) => {
						return (
							<Button
								size={"xl"}
								variant={"secondary"}
								iconRight={<Icon />}
								onClick={() => {
									navigator.clipboard.writeText(`<Icon><${key} /></Icon>`);
								}}
								text={key}
							/>
						);
					})}
					{items.length === 0 && <div>No results</div>}
				</div>
			</div>
		</FormProvider>
	);
};
