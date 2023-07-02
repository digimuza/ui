import { Meta } from "@storybook/react";
import React from "react";
import { Badge } from "../../badge";
import { Button } from "../../buttons";
import {
	Database,
	Home,
	MessageSquare,
	PlusCircle,
	Settings,
} from "../../icons";
import { LibraryProvider } from "../../provider";
import { Table, makeColumns } from "../../table";
import { Panel } from "./Panel";
import { Dashboard } from "./layout";

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

type SampleType = {
	id: string;
	name: string;
	type: string;
	lastIndex: string;
	tokens: number;
	status: string;
};

const people = [
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
].map((c): SampleType => ({ ...c, id: Math.random().toString() }));

const table = makeColumns<SampleType>([
	{
		id: "name",
		header: "Name",
		cell: (row) => row.name,
	},
	{
		id: "type",
		header: "Type",
		width: "128px",
		className: "justify-end",
		cell: (row) => <Badge variant={"gray"}>{row.type}</Badge>,
	},
	{
		id: "status",
		width: "64px",
		className: "justify-center",
		header: "Status",
		cell: (row) => <Badge variant={"success"}>{row.status}</Badge>,
	},
	{
		id: "tokens",
		width: "200px",
		header: "Tokens",
		cell: (row) => "145K",
	},
	{
		id: "pages",
		width: "200px",
		header: "Documents",
		cell: (row) => "1203",
	},
	{
		id: "pages",
		width: "200px",
		header: "Last indexed",
		cell: (row) => "2 hours ago",
	},
]);

export const Default = () => {
	return (
		<Dashboard>
			<Dashboard.Column open className="bg-primary-900" index={3} width={64}>
				<div className="flex h-full pt-24 space-y-3 items-center flex-col self-stretch">
					<Button
						tooltip={"Home"}
						size={"md"}
						variant={"primary"}
						icon={<Home />}
					/>
					<Button
						tooltip={"Knowledge Base"}
						size={"md"}
						variant={"primary"}
						icon={<Database />}
					/>
					<Button
						tooltip={"Chat"}
						size={"md"}
						variant={"primary"}
						icon={<MessageSquare />}
					/>
					<div className="grow" />
					<Button
						tooltip={"Settings"}
						size={"md"}
						variant={"primary"}
						icon={<Settings />}
					/>
					<div>Avatar</div>
				</div>
			</Dashboard.Column>
			<Dashboard.Column
				width={400}
				open
				className="bg-gray-100 flex-1 p-3 text-slate-700"
				index={1}
			>
				<Panel>
					<Panel.Header
						title='Sources'
						extra={
							<Button
								text="Add project"
								iconLeft={<PlusCircle className="w-5 h-5" />}
								size={"sm"}
							/>
						}
					/>
					<Table
						onRowClick={() => {
							console.log("row clicked");
						}}
						columns={table}
						items={people}
					/>
				</Panel>
			</Dashboard.Column>
		</Dashboard>
	);
};
