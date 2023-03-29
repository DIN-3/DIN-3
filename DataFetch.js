import * as d3 from "d3";

const dataUrl = "http://192.168.1.65:3001/Sprint/b_20m_2.csv";

export const FetchData = async () => {
  const response = await fetch(dataUrl);
  const rawData = await response.text();
  const parser = d3.dsvFormat(";");
  const parsedData = parser.parse(rawData, (d) => ({
    timestamp: +d.timestamp,
    distance: +d.distance,
    speed: +d.speed,
    acceleration: +d.acceleration,
  }));
  //console.log("parsed data", parsedData);
  //console.log("raw data", rawData);
  return parsedData;
};
