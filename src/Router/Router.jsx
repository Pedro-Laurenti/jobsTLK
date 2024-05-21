import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "/", element: <Home />},
            { path: "/nova-vaga", element: <CreateJob />}
        ]
    }
]);

export default router;