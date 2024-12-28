import { bestSellingProduct } from "../../common/constant"
import ProductCard from "../../common/productCard"
import Breadcrumb from "../../component/breadcrumbs"
import Filter from "./components/filter"

const ProductListing = () => {
    return <>
        <Breadcrumb title="Shop" isPath={true}/>
        <div className="py-4">
            <div className="container-lg">
                <div className="row g-5">
                    <main className="col-md-12">
                        {/* <Filter /> */}
                        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5">
                            {bestSellingProduct.map((item) => {
                                return <div key={item.name} className="col">
                                    <ProductCard item={item} />
                                </div>
                            })}
                        </div>
                    </main>

                </div>
            </div>
        </div>
    </>
}

export default ProductListing