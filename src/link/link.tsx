import { PropsWithChildren, createContext, useContext } from "react";

type BaseAppLinkProps = PropsWithChildren<{
	href: string;
	className?: string;
}>;
type LinkFactoryComponent = (props: BaseAppLinkProps) => JSX.Element | null;

export const BasicLink: LinkFactoryComponent = ({
	href,
	className,
	children,
}) => (
	<a href={href} className={className}>
		{children}
	</a>
);

export const AppLinkContext = createContext<LinkFactoryComponent>(BasicLink);

export function AppLinkProvider({
	factory,
	children,
}: PropsWithChildren<{
	factory: LinkFactoryComponent;
}>) {
	return (
		<AppLinkContext.Provider value={factory}>
			{children}
		</AppLinkContext.Provider>
	);
}

export function BaseAppLink(props: BaseAppLinkProps) {
	const Link = useContext(AppLinkContext);
	return <Link {...props} />;
}

export function AppLink({
	href,
	children,
}: PropsWithChildren<{ href: string }>) {
	return (
		<BaseAppLink className="px-3 font-semibold text-primary-700" href={href}>
			{children}
		</BaseAppLink>
	);
}
