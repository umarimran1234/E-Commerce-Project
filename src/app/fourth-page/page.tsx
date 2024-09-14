import Navbar from "@/components/Navbar/Navbar";
import ShoppingCart from "./ShoppingCart"
import PaymentPromotion from "./PaymentPromotion";
import SavedForLater from "./SavedForLater";
import SuperDiscount from "../third-page/SuperDiscount";
import Footer from "@/components/Footer/Footer";

function FourthPage() {
    return (
        <>
            <Navbar></Navbar>
            <ShoppingCart></ShoppingCart>
            <PaymentPromotion></PaymentPromotion>
            <SavedForLater></SavedForLater>
            <SuperDiscount></SuperDiscount>
            <Footer></Footer>
        </>
    )
}

export default FourthPage;