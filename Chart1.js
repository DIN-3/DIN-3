import FakeChart from "./FakeChart";

function Chart1() {
  const data = [
    { x: 0, y: 5 },
    { x: 1, y: 9 },
    { x: 2, y: 7 },
    { x: 3, y: 5 },
    { x: 4, y: 3 },
    { x: 5, y: 6 },
  ];

  return (
    <div>
      <h1>Line Chart Example</h1>
      <FakeChart data={data} />
    </div>
  );
}

export default Chart1;