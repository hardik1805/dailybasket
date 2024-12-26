import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./common/layout";
import { Cart, Checkout, ForgotPassword, LandingPage, OrderConfirmation, ProductDetail, ProductListing, SignIn, SignUp } from "./container";

const router = createBrowserRouter([
    {
        path: "/signin",
        element: <Layout><SignIn /></Layout>
    },
    {
        path: "/signup",
        element: <Layout><SignUp /></Layout>
    },
    {
        path: "/forgot",
        element: <Layout><ForgotPassword /></Layout>
    },
    {
        path: "/",
        element: <Layout><LandingPage /></Layout>
    },
    {
        path: "/category",
        element: <Layout><ProductListing /></Layout>
    },
    {
        path: "/product",
        element: <Layout><ProductDetail /></Layout>
    },
    {
        path: "/cart",
        element: <Layout><Cart /></Layout>
    },
    {
        path: "/checkout",
        element: <Layout><Checkout /></Layout>
    },
    {
        path: "/order-detail",
        element: <Layout><OrderConfirmation /></Layout>
    },
    {
        path: "*",
        element: <Navigate to="/" replace />
    },

])

export default router;