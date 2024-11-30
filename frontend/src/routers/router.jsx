import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartPage from "../pages/books/CartPage";
import CheckoutPage from "../pages/books/CheckoutPage";

const router = createBrowserRouter([
    {
    path:"/",
    element:<App/>,
    children:[
        {
            path:"/",
            element:<Home />
        },
        {
            path:"/login",
            element:<p>login</p>
        },
        {
            path:"/register",
            element:<p>register</p>
        },
        {
            path:"/cart",
            element:<CartPage/>
        },
        {
            path:"/checkout",
            element:<CheckoutPage/>
        }
    ]
    }
]);

export default router;