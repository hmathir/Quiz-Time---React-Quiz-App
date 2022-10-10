import { RouterProvider } from "react-router-dom";
import router from "./routes/Main";

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
