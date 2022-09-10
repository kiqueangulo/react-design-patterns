import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserLoader } from "./UserLoader";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { ProductInfo } from "./ProductInfo";

function App() {
  return (
    <>
      <ResourceLoader
        resourceUrl="http://localhost:8080/users/123"
        resourceName="user"
      >
        <UserInfo />
      </ResourceLoader>

      <ResourceLoader
        resourceUrl="http://localhost:8080/products/1234"
        resourceName="product"
      >
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default App;
