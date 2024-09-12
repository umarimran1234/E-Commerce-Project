import Navbar from "@/components/Navbar/Navbar";
import ProductComponent from "./ProductComponent";
import ProductTabs from "./ProductTabs";
import RelatedProducts from "./RelatedProducts";
import SuperDiscount from "./SuperDiscount";

function ThirdPage() {
    return (
        <>
            <Navbar></Navbar>
            <ProductComponent></ProductComponent>
            <ProductTabs></ProductTabs>
            <RelatedProducts></RelatedProducts>
            <SuperDiscount></SuperDiscount>
        </>
    )
}

export default ThirdPage;