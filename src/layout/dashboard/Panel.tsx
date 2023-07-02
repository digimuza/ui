import { PropsWithChildren, ReactNode } from "react";

const LayoutPanelHeader = (props: {
	title: ReactNode;
	subtitle?: ReactNode;
	extra?: ReactNode;
}) => {
	const { title, extra, subtitle } = props;
	return (
		<div className="flex sm:items-center p-3">
			<div className="flex flex-col sm:flex-auto">
				<h1 className="text-base font-semibold leading-6 text-gray-900">
					{title}
				</h1>
				{subtitle && <p className="mt-2 text-sm text-gray-700">{subtitle}</p>}
			</div>

			<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">{extra}</div>
		</div>
	);
};
export function Panel(props: PropsWithChildren<{}>) {
	return (
		<div className="flex flex-col w-full overflow-hidden border-gray-300 rounded-lg bg-white h-full">
			{props.children}
		</div>
	);
}

Panel.Header = LayoutPanelHeader;
