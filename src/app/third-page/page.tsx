import Navbar from "@/components/Navbar/Navbar";
import ProductComponent from "./ProductComponent";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import SuperDiscount from "./SuperDiscount";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "./Breadcrumb";

function ThirdPage() {
    return (
        <>
            <Navbar />
            <Breadcrumb />
            <ProductComponent />
            <ProductTabs />
            <RelatedProducts />
            <SuperDiscount />
            <Footer />
        </>
    )
}

export default ThirdPage;