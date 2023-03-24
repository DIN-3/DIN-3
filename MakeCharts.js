import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { fetchData, fetchText, pushText } from './DataFetch';

function LineChart({ data }) {
  const svgRef = useRef(null);

  useEffect(() => {
    const margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 600 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleLinear().domain([0, d3.max(data, (d) => d.x)]).range([0, width]);
    const y = d3.scaleLinear().domain([0, d3.max(data, (d) => d.y)]).range([height, 0]);

    const line = d3.line()
      .x((d) => x(d.x))
      .y((d) => y(d.y));

    svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));
    svg.append("g")
      .call(d3.axisLeft(y));
  }, [data]);

  return (
    <svg ref={svgRef}>
      <style>{`.line { fill: none; stroke: blue; stroke-width: 2px; }`}</style>
    </svg>
  );
}

function MakeChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    d3.csv("D:/Polar/DIN-3/Polar1.csv", (d) => {
      return { x: +d.column1, y: +d.column3 };
    }).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>Line Chart Example</h1>
      <LineChart data={data} />
    </div>
  );
}


export default MakeChart;