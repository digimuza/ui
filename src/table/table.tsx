import { cn } from "..";
import { LoaderSpinner } from "../loader/loader";

interface Column<T extends { id: string | number }> {
	id: string;
	width?: string;
	className?: string;
	headerClassName?: string;
	header: React.ReactNode;
	cellClassName?: string;
	cell: (row: T) => React.ReactNode;
}
export function makeColumns<T extends { id: string | number }>(
	columns: Column<T>[],
) {
	return columns;
}

export function Table<T extends { id: string }>(props: {
	isFluid?: boolean;
	isLoading?: boolean;
	items?: T[];
	onRowClick?: (row: T) => void;
	columns: Column<T>[];
}) {
	const { columns, items, isFluid, isLoading } = props;
	const cols = `${columns
		.map((c) => `${c.width ?? "minmax(0, 1fr)"}`)
		.join(" ")}`;

	if (items?.length === 0) {
		return (
			<div className="h-full w-full flex flex-col justify-center items-center">
				<div className="text-gray-300">No items...</div>
			</div>
		);
	}
	if (isLoading) {
		return (
			<div className="h-full w-full flex flex-col justify-center items-center">
				<div className="text-gray-300">Loading...</div>
				<div className="w-full h-5 flex justify-center items-center">
					<LoaderSpinner />
				</div>
			</div>
		);
	}
	return (
		<>
			<table
				className={cn(
					"flex flex-col min-w-full divide-y divide-gray-200 overflow-hidden no-scrollbar bg-transparent  h-full items-stretch",
					isFluid && "h-full",
				)}
			>
				<thead className="sticky">
					<tr
						style={{
							display: "grid",
							gridTemplateColumns: cols,
						}}
					>
						{columns.map(({ header, id, className, headerClassName }) => (
							<th
								key={id}
								className={cn(
									"col-span-1 flex py-3 border-r border-gray-200 px-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500",
									className,
									headerClassName,
								)}
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 overflow-y-scroll no-scrollbar grow">
					{items?.map((item) => {
						return (
							// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<tr
								key={item.id}
								onClick={() => props.onRowClick?.(item)}
								style={{
									display: "grid",
									gridTemplateColumns: cols,
								}}
								className={cn(
									props.onRowClick && ["hover:bg-gray-50", "cursor-pointer"],
									"min-h-[64px]",
								)}
							>
								{columns.map(({ id, cell, cellClassName, className }) => (
									<td
										key={id}
										className={cn(
											"col-span-1 overflow-hidden truncate min-w-[64px] flex border-r justify-start items-center whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900",
											className,
											cellClassName,
										)}
									>
										{cell(item)}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
