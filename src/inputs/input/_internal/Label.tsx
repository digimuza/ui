import { cn } from "../../../utils/cn";
import { useInputContext } from "./InputContext";

export function Label(
	props: Omit<
		React.DetailedHTMLProps<
			React.LabelHTMLAttributes<HTMLLabelElement>,
			HTMLLabelElement
		>,
		"children" | "htmlFor"
	>,
) {
	const { className, ...rest } = props;
	const { name, label } = useInputContext();
	if (label == null) return null;
	return (
		<label
			{...rest}
			htmlFor={`${name}-input`}
			className={cn(
				"-top-7 font-medium absolute cursor-pointer block text-sm leading-6 text-gray-900",
			)}
		>
			{label}
		</label>
	);
}
