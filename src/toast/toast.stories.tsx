import { Meta } from "@storybook/react";
import { motion } from "framer-motion";
import { Button } from "../buttons/button";
import { LibraryProvider } from "../provider";
import { toast } from "./toast";
const meta: Meta = {
	title: "Feedback/Toast",
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
	return (
		<div className="grid grid-cols-4 gap-3">
			<Button
				mode={"success"}
				text="Success toast"
				onClick={() => {
					toast.success("Success");
				}}
			/>
			<Button
				mode={"destructive"}
				text="Error toast"
				onClick={() => {
					toast.error("Success");
				}}
			/>
			<Button
				mode={"default"}
				text="Loading toast"
				onClick={() => {
					const xzc = new Promise((resolve) => {
						setTimeout(() => {
							resolve(null);
						}, 3000);
					});
					toast.promise(xzc, {
						loading: "Loading",
						success: "Success",
						error: "Error",
					});
				}}
			/>
			<Button
				mode={"gray"}
				text="Custom toast"
				onClick={() => {
					toast.custom(() => {
						return (
							<motion.div
								initial={{
									opacity: 0,
									translateY: -200,
								}}
								animate={{
									opacity: 1,
									translateY: 0,
								}}
								exit={{
									opacity: 0,
									translateY: -200,
								}}
								className="bg-gray-900 p-3 rounded-md text-gray-900f"
							>
								Custom toast
							</motion.div>
						);
					});
				}}
			/>
		</div>
	);
};
