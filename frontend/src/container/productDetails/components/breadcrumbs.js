import { Link } from "react-router-dom";

const Breadcrumb = () => {
    return <nav className="breadcrumb">
        <Link className="breadcrumb-item" to="/category">Category</Link>
        <span className="breadcrumb-item active" aria-current="page">Product Name</span>
    </nav>
}

export default Breadcrumb;