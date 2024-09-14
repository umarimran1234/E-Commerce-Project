import Navbar from "@/components/Navbar/Navbar";
import ShoppingCart from "./ShoppingCart"
import PaymentPromotion from "./PaymentPromotion";
import SavedForLater from "./SavedForLater";

function FourthPage() {
    return (
        <>
            <Navbar></Navbar>
            <ShoppingCart></ShoppingCart>
            <PaymentPromotion></PaymentPromotion>
            <SavedForLater></SavedForLater>
        </>
    )
}

export default FourthPage;