import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import MyComments from "../Pages/myComment/myComments";
import Private from "../Private/Private";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path:"/",
                element:<Private><Home/></Private>,
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/myComment",
                element:<MyComments/>,
            }
        ]
    }
])

export default router;