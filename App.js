import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { fetchData, fetchText, pushText } from './DataFetch';
import LineChart from './LineChart';
import Chart1 from './Chart1';
import MakeCharts from './MakeCharts';


export default function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetchData().then((data) => {
      setData(data);
    });
  }, []);


  return (
    <View style={styles.container}>
      <LineChart/>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
        DIN-3 {data}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    paddingTop: 55,
  },
});
