import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = () => (
  <h1 style={{ backgroundColor: "green" }}>Left!</h1>
);

const RightHandComponent = () => (
  <p style={{ backgroundColor: "red" }}>Right!</p>
);

function App() {
  return <SplitScreen left={LeftHandComponent} right={RightHandComponent} />;
}

export default App;
