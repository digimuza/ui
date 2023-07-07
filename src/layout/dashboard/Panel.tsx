import { PropsWithChildren, ReactNode } from "react";

const LayoutPanelHeader = (props: {
	title: ReactNode;
	subtitle?: ReactNode;
	className?: string;
	extra?: ReactNode;
}) => {
	const { title, extra, subtitle } = props;
	return (
		<div className="flex sm:items-center p-3 min-h-[54px] border-b border-collapse z-20  bg-transparent">
			<div className="flex flex-col sm:flex-auto">
				<h1 className="text-xl font-light font-sans leading-6 text-gray-700">
					{title}
				</h1>
				{subtitle && <p className="mt-2 text-sm text-gray-700">{subtitle}</p>}
			</div>

			<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">{extra}</div>
		</div>
	);
};

const LayoutPaneFooter = (props: PropsWithChildren<{}>) => {
	return (
		<div className="p-3 shadow-xl z-40 min-h-[56px] bg-gray-50 flex justify-end items-center text-right">
			{props.children}
		</div>
	);
};

const LayoutPanelBody = (props: PropsWithChildren<{}>) => {
	return <div className="p-3">{props.children}</div>;
};

export function Panel(props: PropsWithChildren<{}>) {
	return (
		<div className="flex flex-col w-full overflow-hidden border-gray-300 h-full">
			{props.children}
		</div>
	);
}

Panel.Footer = LayoutPaneFooter;
Panel.Body = LayoutPanelBody;
Panel.Header = LayoutPanelHeader;
