import ReactMarkdown from "react-markdown";
import "./markdown.css";
export function Markdown(props: { children: string }) {
	return <ReactMarkdown className={"markdown"}>{props.children}</ReactMarkdown>;
}
