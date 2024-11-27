import ProductComponent from "./ProductComponent";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import SuperDiscount from "./SuperDiscount";
import Footer from "@/components/Footer/Footer";
import Breadcrumb from "./Breadcrumb";
import ThirdPageNavbar from "@/components/ThirdPageNavbar/ThirdPageNavbar";

function ThirdPage() {
    return (
        <>
            <ThirdPageNavbar />
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