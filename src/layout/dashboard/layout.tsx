import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "../../buttons/button";
import {
	Database,
	Home,
	MessageSquare,
	Settings,
} from "../../icons/base/icons";
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
					width: props.width ?? "100%",
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

export function LayoutDashboard() {
	// const [val, setValue] = useState(false);
	return (
		<TooltipSettingsProvider direction={"left"}>
			<AnimatePresence>
				<div className="flex h-screen w-screen">
					<LayoutDashboardColumn
						open
						className="bg-primary-900"
						index={3}
						width={80}
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
					{/* <LayoutDashboardColumn
					open={val}
					className="bg-primary-600"
					index={10}
					width={300}
				>
					<div>logo</div>
					<div>chat</div>
					<div>chat history</div>
					<div>settings</div>
				</LayoutDashboardColumn> */}
					<LayoutDashboardColumn open className="bg-gray-50" index={1}>
						{/* <Button
						text="Open"
						onClick={() => {
							setValue(!val);
						}}
					/> */}
					</LayoutDashboardColumn>
				</div>
			</AnimatePresence>
		</TooltipSettingsProvider>
	);
}
