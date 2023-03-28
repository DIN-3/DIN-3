import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = () => {
  const chartRef = useRef(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3001/1");
      const data = await response.text();
      return d3.csvParse(data, (d) => {
        return {
          date: d3.timeParse("%Y-%m-%d")(d.date),
          value: +d.timestamp,
          value2: +d.speed,
        };
      });
    };
    
    const drawChart = async () => {
      const data = await fetchData();
      const margin = { top: 20, right: 20, bottom: 30, left: 50 };
      const width = 960 - margin.left - margin.right;
      const height = 500 - margin.top - margin.bottom;

      const x = d3
        .scaleTime()
        .range([0, width])
        .domain(d3.extent(data, (d) => d.date));

      const y = d3
        .scaleLinear()
        .range([height, 0])
        .domain([0, d3.max(data, (d) => Math.max(d.value, d.value2))]);

      const xAxis = d3.axisBottom(x);
      const yAxis = d3.axisLeft(y);

      const line1 = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.value));

      const line2 = d3
        .line()
        .x((d) => x(d.date))
        .y((d) => y(d.value2));

      const svg = d3
        .select(chartRef.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

      svg
        .append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line1);

      svg
        .append("path")
        .datum(data)
        .attr("class", "line")
        .style("stroke", "red")
        .attr("d", line2);

      svg.append("g").attr("class", "x axis").attr("transform", `translate(0,${height})`).call(xAxis);

      svg.append("g").attr("class", "y axis").call(yAxis);
    };

    drawChart();
  }, []);

  return <div ref={chartRef}></div>;
};

export default LineChart;