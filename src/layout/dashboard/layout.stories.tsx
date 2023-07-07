import {
	Activity,
	Database,
	Home,
	Plus,
	RefreshCw,
	Search,
	Settings,
	Trash,
} from "@digimuza/icons/base";
import { Meta } from "@storybook/react";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Avatar } from "../../avatar";
import { Badge } from "../../badge";
import { Button } from "../../buttons";
import { ButtonGroup } from "../../buttons/button-group";
import { AffixButton, FieldText, Form } from "../../inputs";
import { Markdown } from "../../markdown/markdown";
import { LibraryProvider } from "../../provider";
import { Table, makeColumns } from "../../table";
import { Tooltip, TooltipSettingsProvider } from "../../tooltip";
import { cn } from "../../utils";
import { createDynamicContext } from "../../utils/context";
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
		name: "Frakcinis odos atnaujinimas",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
	{
		name: "nordiclinic.lt",
		type: "WEB",
		lastIndex: "2 hours ago",
		tokens: 12129,
		status: "OK",
	},
].map(
	(c, index): SampleType => ({
		...c,
		name: c.name,
		id: Math.random().toString(),
	}),
);

const markdown = `

# Welcome to StackEdit!

Hi! I'm your first Markdown file in **StackEdit**. If you want to learn about StackEdit, you can read me. If you want to play with Markdown, you can edit me. Once you have finished with me, you can create new files by opening the **file explorer** on the left corner of the navigation bar.

## SSDGJH

asdhjagsdjhgas

`;

const table = makeColumns<SampleType>([
	{
		id: "name",
		header: "Name",
		cell: (row) => row.name,
	},
	{
		id: "type",
		header: "Type",
		width: "96px",
		className: "justify-center",
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

interface MarkdownBlocksGroup {
	blocks: { id: string; markdown: string; match?: number }[];
}
const MarkdownBlocksGroup = (props: MarkdownBlocksGroup) => {
	return (
		<div className="flex-1 p-8 rounded-md overflow-hidden overflow-y-scroll">
			{props.blocks.map(({ id, markdown, match }, index) => {
				return (
					<div key={id} className="flex mb-3 border rounded-lg overflow-hidden">
						<div
							className={cn(
								"flex justify-center items-center w-32 text-xl bg-gray-100 text-gray-100f",
								match && match > 0.5 && "bg-green-700 text-gray-900f",
							)}
						>
							{index + 1}
						</div>
						<div className="bg-gray-25 text-gray-25f">
							<Markdown>{markdown}</Markdown>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const TabContext = createDynamicContext<"content" | "details" | "queries">(
	"TabCtx",
	"content",
);

const Tabs = () => {
	const [activeTab, setTab] = TabContext.use();
	return (
		<div className="p-8 py-4 border-b bg-white">
			<ButtonGroup
				isFluid
				active={activeTab}
				onActiveChange={(v) => {
					if (v == null) return;
					const result = z.enum(["content", "details", "queries"]).safeParse(v);
					if (!result.success) return;
					setTab(result.data);
				}}
				variant={"primary"}
				mode={"default"}
			>
				<Button className="flex-1" value={"content"}>
					Content
				</Button>
				<Button value={"details"} className="flex-1">
					Details
				</Button>
				<Button value={"queries"} className="flex-1">
					Matched queries
				</Button>
			</ButtonGroup>
		</div>
	);
};

const Tab1 = () => {
	const [tab] = TabContext.use();
	if (tab !== "content") return null;
	return (
		<MarkdownBlocksGroup
			blocks={[
				{
					match: 0.7,
					id: "1",
					markdown,
				},
				{
					id: "2",
					markdown,
				},
				{
					id: "3",
					markdown,
				},

				{
					id: "4",
					markdown,
				},
				{
					id: "5",
					markdown,
				},
			]}
		/>
	);
};

export const KnowlageBase = () => {
	const form = useForm();
	useEffect(() => {
		form.setValue("sources", "all");
	}, []);
	return (
		<Dashboard>
			<Dashboard.Column
				open
				className="bg-gray-100 border-r-0"
				index={3}
				width={64}
			>
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
						tooltip={"Query history"}
						size={"md"}
						variant={"primary"}
						icon={<Activity />}
					/>
					<Button
						tooltip={"Settings"}
						size={"md"}
						variant={"primary"}
						icon={<Settings />}
					/>
					<div className="grow" />
					<Tooltip content={"Andrius Mozuraitis"}>
						<div className="py-3 cu">
							<Avatar
								color={"primary"}
								className="cursor-pointer"
								size={"sm"}
								title="Andrius Mozūraitis"
							/>
						</div>
					</Tooltip>
				</div>
			</Dashboard.Column>
			<Dashboard.Column
				width={300}
				index={2}
				open
				className="bg-gray-0 text-gray-0f border-r"
			>
				<Panel>
					<Panel.Header title='Sources' />
					<Table
						onRowClick={() => {
							console.log("row clicked");
						}}
						columns={table.filter((c) => ["name"].includes(c.id))}
						items={people.slice(1, 2)}
					/>
					<div className="p-3 w-full">
						<Button
							iconLeft={<Plus />}
							text="Add new source"
							className="w-full"
						/>
					</div>
					<Panel.Footer>1 source</Panel.Footer>
				</Panel>
			</Dashboard.Column>
			<Dashboard.Column
				width={400}
				index={2}
				open
				className="bg-gray-0 border-r"
			>
				<Panel>
					<Panel.Header title='Pages' />
					<Panel.Body>
						<Form form={form} className="flex space-x-1">
							<FieldText
								suffix={
									<AffixButton
										mode={"gray"}
										type='submit'
										variant={"link"}
										icon={<Search />}
									/>
								}
								name="search"
								placeholder="Search"
							/>
						</Form>
					</Panel.Body>

					<Table
						onRowClick={() => {
							console.log("row clicked");
						}}
						columns={table.filter((c) => ["name"].includes(c.id))}
						items={people}
					/>
					<Panel.Footer>328 pages</Panel.Footer>
				</Panel>
			</Dashboard.Column>
			<Dashboard.Column
				open
				index={1}
				className="bg-gray-0 flex-1 text-slate-700"
			>
				<TooltipSettingsProvider direction={"bottom"}>
					<Panel>
						<Panel.Header
							title='Frakcinis odos atnaujinimas'
							extra={
								<ButtonGroup size={"xs"}>
									<Button tooltip={"Force update"} iconLeft={<RefreshCw />}>
										Force update
									</Button>
									<Button
										variant={"primary"}
										mode={"destructive"}
										tooltip={"Delete page"}
										icon={<Trash />}
									/>
								</ButtonGroup>
							}
						/>
						<MarkdownBlocksGroup
							blocks={[
								{
									match: 0.7,
									id: "1",
									markdown,
								},
								{
									id: "2",
									markdown,
								},
								{
									id: "3",
									markdown,
								},

								{
									id: "4",
									markdown,
								},
								{
									id: "5",
									markdown,
								},
							]}
						/>
					</Panel>
				</TooltipSettingsProvider>
			</Dashboard.Column>
		</Dashboard>
	);
};
