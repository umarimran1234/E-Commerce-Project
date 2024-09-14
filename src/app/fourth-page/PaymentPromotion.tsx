import { CiDeliveryTruck } from "react-icons/ci";
import { MdMessage } from "react-icons/md";
import { RiLockFill } from "react-icons/ri";

function PaymentPromotion() {
    return (
        <div className="container mx-auto mt-10">
            <div className="flex md:flex-row flex-col gap-8 items-center md:gap-16">
                <div className="flex items-center gap-2">
                    <RiLockFill className="rounded-full border-2 bg-gray-300 text-4xl p-1" />
                    <div>
                        <p>Secure Payment</p>
                        <p className="text-gray-500">Have you ever finally just</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <MdMessage className="rounded-full border-2 bg-gray-300 text-4xl p-1" />
                    <div>
                        <p>Customer support</p>
                        <p className="text-gray-500">Have you ever finally just </p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <CiDeliveryTruck className="rounded-full border-2 bg-gray-300 text-4xl p-1" />
                    <div>
                        <p>Free delivery</p>
                        <p className="text-gray-500">Have you ever finally just</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPromotion;