import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            { path: "/", element: <Home />},
            { path: "/nova-vaga", element: <CreateJob />},
            { path: "/minhas-vagas", element: <MyJobs />}
        ]
    }
]);

export default router;