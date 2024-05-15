import AllRoutes from "./routing/AllRoutes";
import { RecoilRoot } from "recoil";

function App() {
  console.log("App.js");
  
  return (
    <RecoilRoot>
        <AllRoutes />
    </RecoilRoot>
  );
}

export default App;
