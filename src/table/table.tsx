import React from "react";
import { cn } from "..";

interface Column<T extends { id: string }> {
	id: string;
	width?: string;
	className?: string;
	headerClassName?: string;
	header: React.ReactNode;
	cellClassName?: string;
	cell: (row: T) => React.ReactNode;
}
export function makeColumns<T extends { id: string }>(columns: Column<T>[]) {
	return columns;
}

export function Table<T extends { id: string }>(props: {
	isFluid?: boolean;
	items: T[];
	onRowClick?: (row: T) => void;
	columns: Column<T>[];
}) {
	const { columns, items, isFluid } = props;
	const cols = `${columns
		.map((c) => `${c.width ?? "minmax(0, 1fr)"}`)
		.join(" ")}`;

	return (
		<>
			<table
				className={cn(
					"flex flex-col min-w-full divide-y divide-gray-200 overflow-scroll items-stretch",
					isFluid && "h-full",
				)}
			>
				<thead className="sticky">
					<tr
						style={{
							display: "grid",
							gridTemplateColumns: cols,
						}}
						className={"bg-gray-100"}
					>
						{columns.map(({ header, id, className, headerClassName }) => (
							<th
								key={id}
								className={cn(
									"col-span-1 flex py-3 border-r border-gray-200 border-t px-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500",
									className,
									headerClassName,
								)}
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="divide-y divide-gray-200 overflow-y-scroll grow">
					{items.map((item) => {
						return (
							// rome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
							<tr
								onClick={() => props.onRowClick?.(item)}
								style={{
									display: "grid",
									gridTemplateColumns: cols,
								}}
								className={cn(
									props.onRowClick && ["hover:bg-gray-50", "cursor-pointer"],
								)}
							>
								{columns.map(({ id, cell, cellClassName, className }) => (
									<td
										key={id}
										className={cn(
											"col-span-1 flex border-r border-b justify-start items-center whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900",
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
