import { RouterProvider } from "react-router-dom";
import routes from "./Router/Routes/Routes";

const App = () => {
  return (
    <div className="container mx-auto">
      <RouterProvider router={routes} >
    
      </RouterProvider>
    </div>
  );
}

export default App;
