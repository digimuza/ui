import { useInputContext } from "./InputContext";

export function Label() {
	const { name, label } = useInputContext();
	if (label == null) return null;
	return (
		<label
			htmlFor={`${name}-input`}
			className="-top-7 font-medium absolute cursor-pointer block text-sm leading-6 text-gray-900"
		>
			{label}
		</label>
	);
}
