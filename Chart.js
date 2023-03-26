import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Svg, Path, G, Line, Text } from "react-native-svg";
import * as d3 from "d3";
import { fetchData } from "./DataFetch";
import { ResponsiveLine } from "@nivo/line";

const Chart = ({ data }) => (
  <ResponsiveLine
    data={[
      {
        id: "distance",
        data: data.map((d) => ({
          x: d.timestamp,
          y: d.distance,
        })),
      },
      {
        id: "speed",
        data: data.map((d) => ({
          x: d.timestamp,
          y: d.speed,
        })),
      },
      {
        id: "acceleration",
        data: data.map((d) => ({
          x: d.timestamp,
          y: d.acceleration,
        })),
      },
    ]}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: -10,
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Timestamp",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Value",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Chart;
