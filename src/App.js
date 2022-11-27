import { RouterProvider } from "react-router-dom";
import routes from "./Router/Routes/Routes";
import 'react-photo-view/dist/react-photo-view.css';
import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  return (
    <div className="container mx-auto">
      <RouterProvider router={routes} >
    
      </RouterProvider>
    </div>
  );
}

export default App;
