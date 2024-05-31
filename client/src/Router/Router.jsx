import {createBrowserRouter} from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            }, {
                path: "/nova-vaga",
                element: <CreateJob/>
            }, {
                path: "/minhas-vagas",
                element: <MyJobs/>
            }, {
                path: "/salario",
                element: <SalaryPage/>
            }, {
                path: "editar/:id",
                element: <UpdateJob/>,
                loader: ({params}) => fetch(`http://localhost:3000/all-jobs/${params.id}`)
            }
        ]
    }
]);

export default router;