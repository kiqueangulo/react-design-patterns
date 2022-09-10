import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";

function App() {
  return (
    <>
      <ResourceLoader
        resourceUrl="http://localhost:8080/users/123"
        resourceName="user"
      >
        <UserInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
