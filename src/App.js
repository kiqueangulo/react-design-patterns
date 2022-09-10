import axios from "axios";

import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { DataSource } from "./DataSource";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

function App() {
  return (
    <>
      <DataSource
        getDataFunc={async () => {
          const response = await axios.get("http://localhost:8080/users/123");
          return response.data;
        }}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
    </>
  );
}

export default App;
