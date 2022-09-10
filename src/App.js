import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <UserLoader userId="456">
      <UserInfo />
    </UserLoader>
  );
}

export default App;
