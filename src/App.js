import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = () => (
  <h1 style={{ backgroundColor: "green" }}>Left!</h1>
);

const RightHandComponent = () => (
  <p style={{ backgroundColor: "red" }}>Right!</p>
);

function App() {
  return (
    <SplitScreen
      left={LeftHandComponent}
      right={RightHandComponent}
      leftWeight={1}
      rightWeight={3}
    />
  );
}

export default App;
