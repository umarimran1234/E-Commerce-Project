import FourthPageNavbar from "@/components/FourthPageNavbar/FourthPageNavbar";
import ShoppingCart from "./ShoppingCart"
import PaymentPromotion from "./PaymentPromotion";
import SavedForLater from "./SavedForLater";
import SuperDiscount from "../third-page/SuperDiscount";
import Footer from "@/components/Footer/Footer";

function FourthPage() {
    return (
        <div className="bg-gray-100/20">
        <FourthPageNavbar/>
            <ShoppingCart></ShoppingCart>
            <PaymentPromotion></PaymentPromotion>
            <SavedForLater></SavedForLater>
            <SuperDiscount></SuperDiscount>
            <Footer></Footer>
        </div>
    )
}

export default FourthPage;