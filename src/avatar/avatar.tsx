import * as RAvatar from "@radix-ui/react-avatar";
import { useMemo } from "react";
import { hash } from "ts-prime";
import { cn } from "../utils/cn";
import { VariantProps, cva } from "../utils/cva";

const makeInitials = (title: string) => {
	return title
		.split(" ")
		.filter((_, index, arr) => index === 0 || index === arr.length - 1)
		.map((str) => str[0])
		.join("")
		.toUpperCase();
};

const variants = cva(
	"inline-flex border  items-center justify-center overflow-hidden rounded-full",
	{
		variants: {
			size: {
				xs: "h-8 w-8 text-xs",
				sm: "h-10 w-10 text-base",
				md: "h-12 w-12 text-lg",
				lg: "h-14 w-14 text-xl",
				xl: "h-16 w-16 text-xl",
			},
			color: {
				primary: "bg-primary-500 text-primary-500f",
				secondary: "bg-secondary-500 text-secondary-500f",
				light: "bg-white text-gray-900",
				dark: "bg-gray-900 text-gray-900f",
				gray: "bg-white grayscale",
			},
		},
		defaultVariants: {
			size: "md",
			color: "primary",
		},
	},
);

export type Avatar = VariantProps<typeof variants> & {
	title: string;
	src?: string;
	gen?: boolean;
	className?: string;
};

function AvatarBase(props: Avatar) {
	const { title, src, gen, size, className, color } = props;
	const initials = makeInitials(title);

	const imageUrl = useMemo(() => {
		if (src) return src;
		if (gen)
			return `https://api.dicebear.com/6.x/identicon/svg?seed=${hash(title)}`;
		return null;
	}, [gen, src]);

	return (
		<RAvatar.Root className={cn(variants({ size, className, color }))}>
			{imageUrl && (
				<RAvatar.Image
					className="h-full w-full object-cover"
					src={imageUrl}
					alt={props.title}
				/>
			)}
			<RAvatar.Fallback
				className="h-full w-full justify-center items-center flex"
				delayMs={200}
			>
				{initials}
			</RAvatar.Fallback>
		</RAvatar.Root>
	);
}

export function Avatar(props: Avatar) {
	return <AvatarBase {...props} />;
}
