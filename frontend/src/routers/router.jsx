import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
    {
    path:"/",
    element:<App/>,
    children:[
        {
            path:"/",
            element:<p>home</p>
        },
        {
            path:"/login",
            element:<p>login</p>
        },
        {
            path:"/register",
            element:<p>register</p>
        }
    ]
    }
]);

export default router;