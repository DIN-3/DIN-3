import React, { Component, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FetchData } from "./DataFetch";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryAxis,
} from "victory-native";

export default function App() {
  useEffect(() => {
    FetchData().then((parsedData) => {
      setData(parsedData);
    });
  }, []);
  const [data, setData] = useState([]);
  //console.log("data", data);

  return (
    <View>
      <VictoryChart
        width={350}
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `Distance (m): ${datum.distance}\nSpeed (m/s): ${datum.speed}`
            }
          />
        }
      >
        <VictoryAxis label="Distance" />
        <VictoryAxis label="Speed" dependentAxis />
        <VictoryLine
          y="speed"
          x="distance"
          data={data}
          labelComponent={
            <VictoryTooltip
              cornerRadius={0}
              flyoutStyle={{ stroke: "tomato", strokeWidth: 2 }}
              style={{ fontSize: 10 }}
            />
          }
        />
      </VictoryChart>
      <VictoryChart
        width={350}
        theme={VictoryTheme.material}
        containerComponent={
          <VictoryVoronoiContainer
            labels={({ datum }) =>
              `Timestamp (s): ${datum.timestamp}\nDistance (m): ${datum.distance}`
            }
          />
        }
      >
        <VictoryAxis label="Distance" />
        <VictoryAxis label="Speed" dependentAxis />
        <VictoryLine
          y="timestamp"
          x="distance"
          data={data}
          labelComponent={
            <VictoryTooltip
              cornerRadius={0}
              flyoutStyle={{ stroke: "tomato", strokeWidth: 2 }}
              style={{ fontSize: 10 }}
            />
          }
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
});
