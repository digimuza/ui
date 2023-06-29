import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "../../badge/badge";
import { Button } from "../../buttons/button";
import {
	Database,
	Home,
	MessageSquare,
	PlusCircle,
	Settings,
} from "../../icons/base/icons";
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
	{
		name: "tbol-core",
		type: "GITHUB",
		lastIndex: "3 days ago",
		tokens: 34544,
		status: "OK",
	},
	{
		name: "main-core",
		type: "NOTION",
		lastIndex: "5 min ago",
		tokens: 4544,
		status: "OK",
	},
	{
		name: "documents",
		type: "GOOGLE DRIVE",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core confluence",
		type: "CONFLUENCE",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
		status: "OK",
	},
	{
		name: "tbol-core jira",
		type: "JIRA",
		lastIndex: "5 min ago",
		tokens: 322544,
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
		header: "Tokens",
		cell: (row) => row.tokens,
	},
]);

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
					<LayoutDashboardColumn open className="bg-gray-100 flex-1" index={1}>
						<div className="flex flex-col w-full overflow-hidden border-gray-300 bg-white h-full">
							<div className="sm:flex sm:items-center p-3">
								<div className="sm:flex-auto">
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
										asdjkahsdkjhaksjd
									</Modal>
									<Button
										onClick={() => setOpen(true)}
										text="Add project"
										iconLeft={<PlusCircle className="w-5 h-5" />}
										size={"sm"}
									></Button>
								</div>
							</div>
							<Table
								onRowClick={() => {
									console.log("row clicked");
								}}
								columns={table}
								items={people}
							></Table>
						</div>
					</LayoutDashboardColumn>
				</div>
			</AnimatePresence>
		</TooltipSettingsProvider>
	);
}
