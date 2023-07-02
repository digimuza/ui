import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { z } from "zod";
import { Affix, FieldText } from "../..";
import { Badge } from "../../badge/badge";
import { Button } from "../../buttons/button";
import {
	Database,
	Home,
	MessageSquare,
	PlusCircle,
	Settings,
} from "../../icons/base/icons";
import { Form, useForm } from "../../inputs/form";
import { Modal } from "../../modal/modal";
import { Table, makeColumns } from "../../table/table";
import { TooltipSettingsProvider } from "../../tooltip/tooltip";
import { cn } from "../../utils/cn";
function LayoutDashboardColumn(props: {
	children: React.ReactNode;
	width?: string | number;
	open: boolean;
	index: number;
	className?: string;
}) {
	const intial = useRef(props.open);
	const { className } = props;
	return (
		<motion.div
			variants={{
				closed: {
					width: 0,
				},
				open: {
					// width: props.width ?? "100%",
				},
			}}
			initial={intial.current ? "open" : "closed"}
			animate={props.open ? "open" : "closed"}
			style={{
				zIndex: props.index,
			}}
			transition={{
				delay: 0.1,
			}}
			className={cn(
				"shrink-0 shadow-lg h-full self-stretch overflow-hidden",
				className,
			)}
		>
			<motion.div
				variants={{
					open: {
						opacity: 1,
						translateX: 0,
					},
					closed: {
						opacity: 0,
						translateX: -100,
					},
				}}
				transition={{
					repeatType: "reverse",
				}}
				exit={"closed"}
				animate={props.open ? "open" : "closed"}
				style={{
					minWidth: props.width ?? "100%",
					zIndex: props.index,
				}}
				className="h-full"
			>
				{props.children}
			</motion.div>
		</motion.div>
	);
}

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

function CreateSourceForm() {
	const form = useForm({
		schema: z.object({}),
	});
	return (
		<Form form={form} className="flex flex-col space-y-8 p-4 my-16 mx-8">
			<div>
				<h1 className="text-3xl font-medium">Create data source</h1>
				<div className="mt-3">
					Create a new data source to start indexing your data.
				</div>
			</div>
			<div className="flex w-full space-x-3">
				<FieldText
					description="Used for display purposes only"
					name={"name"}
					placeholder="Jira tickets"
					label="Source name"
				/>
				<FieldText
					description='What type of source is this? e.g. "Google Drive, Confluence, Jira"'
					name={"type"}
					label="Source type"
				/>
			</div>

			<div className="flex w-full">
				<FieldText
					prefix={
						<Affix>
							<span className="px-3">https://</span>
						</Affix>
					}
					name={"type"}
					placeholder="www.example.com"
					label="Source URL"
				/>
			</div>
			<div className="grow" />
			<div className="flex justify-end space-x-3 w-full">
				<Button
					className="w-64"
					type={"button"}
					variant={"secondary"}
					mode={"destructive"}
				>
					Close
				</Button>
				<Button className="w-64" type='submit'>
					Create
				</Button>
			</div>
		</Form>
	);
}

export function LayoutDashboard() {
	const [isOpen, setOpen] = useState(false);
	return (
		<TooltipSettingsProvider direction={"left"}>
			<AnimatePresence>
				<div className="flex h-full w-full">
					<LayoutDashboardColumn
						open
						className="bg-primary-900"
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
					</LayoutDashboardColumn>

					<LayoutDashboardColumn
						width={400}
						open
						className="bg-gray-100 flex-1 p-3 text-slate-700"
						index={1}
					>
						<div className="flex flex-col w-full overflow-hidden border-gray-300 rounded-lg bg-white h-full">
							<div className="p-3 text-3xl font-medium bg-gray-300">Home</div>
							<div className="flex sm:items-center p-3">
								<div className="flex flex-col sm:flex-auto">
									<h1 className="text-base font-semibold leading-6 text-gray-900">
										Sources
									</h1>
									<p className="mt-2 text-sm text-gray-700">
										A list of all the project in your account including their
										name, title, email and role.
									</p>
								</div>

								<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
									<Modal open={isOpen} onClose={() => setOpen(false)}>
										<CreateSourceForm />
									</Modal>
									<Button
										onClick={() => setOpen(true)}
										text="Add project"
										iconLeft={<PlusCircle className="w-5 h-5" />}
										size={"sm"}
									/>
								</div>
							</div>
							<Table
								onRowClick={() => {
									console.log("row clicked");
								}}
								columns={table}
								items={people}
							/>
						</div>
					</LayoutDashboardColumn>
				</div>
			</AnimatePresence>
		</TooltipSettingsProvider>
	);
}
