import { Meta } from "@storybook/react";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "./utils";
const meta: Meta = {
	title: "Data/Input",
	tags: ["autodocs"],
};

export default meta;

function manoMandraFunkcija(vardas: string) {
	if (vardas === "Agne") {
		return "Tavo grazios kojos";
	}

	return "Ko cia ziuri";
}

const BB = (props: { vardas: string }) => {
	const arAgne = props.vardas === "Agne";
	return (
		<motion.div
			animate={{
				translateX: arAgne ? 10 : 1,
			}}
			className={cn("p-3 hover:bg-black hover:text-white")}
		>
			{manoMandraFunkcija(props.vardas)}
		</motion.div>
	);
};

export function Default() {
	return (
		<>
			<BB vardas="Jonas" />
			<BB vardas="Petras" />
			<BB vardas="Agne" />
			<BB vardas="Petras" />
			<BB vardas="Petras" />
			<BB vardas="Petras" />
		</>
	);
}
