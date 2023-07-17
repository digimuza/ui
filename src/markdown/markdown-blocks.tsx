import { cn } from "../utils";
import { Markdown } from "./markdown";

export interface MarkdownBlocksGroup {
	blocks: { id: string; markdown: string; match?: number }[];
}
export const MarkdownBlocksGroup = (props: MarkdownBlocksGroup) => {
	return (
		<div className="flex-1 p-12 rounded-md overflow-hidden overflow-y-scroll">
			{props.blocks.map(({ id, markdown }) => {
				return (
					<div key={id} className="flex mb-3 border rounded-lg overflow-hidden">
						<div className="bg-gray-25 text-gray-25f">
							<Markdown>{markdown}</Markdown>
						</div>
					</div>
				);
			})}
		</div>
	);
};
