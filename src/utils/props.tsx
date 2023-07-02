import React, { ReactNode } from "react";

export function alterProps<Props>(
	children: ReactNode,
	fn: (props: Props, index: number, childrenList: ReactNode[]) => Props,
) {
	const arr = React.Children.toArray(children);
	const childrenList = arr.map((c, index, arr) => {
		if (typeof c !== "object") return c;
		if (c == null) return c;
		if ("props" in c) {
			return {
				...c,
				props: {
					...c.props,
					...fn(c.props, index, arr),
				},
			};
		}

		return c;
	});

	return <>{childrenList}</>;
}
