import * as echarts from "echarts";
import { useEffect, useId } from "react";
import { useWindowSize } from "../utils/useWindowSize";

export function CBarChart() {
	const id = useId();
	const [width, height] = useWindowSize();
	useEffect(() => {
		const chartDom = document.getElementById(id)!;
		console.log(chartDom);
		const chart = echarts.init(chartDom);
		chart.setOption({
			xAxis: {
				type: "category",
				data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
			},
			yAxis: {
				type: "value",
			},
			series: [
				{
					data: [120, 200, 150, 80, 70, 110, 130],
					type: "bar",
					showBackground: true,
					backgroundStyle: {
						color: "rgba(180, 180, 180, 0.2)",
					},
				},
			],
		});

		chart.resize();

		console.log("chart", chart);
	}, [width, height]);

	return <div className="h-[300px] w-full" id={id}></div>;
}
