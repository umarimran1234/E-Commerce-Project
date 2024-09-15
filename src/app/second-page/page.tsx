import Footer from "@/components/Footer/Footer";
import LayoutShift from "@/components/LayoutShift/LayoutShift";
import Navbar from "@/components/Navbar/Navbar";
import Navigation from "@/components/Navigation/Navigation";
import FilterSidebar from "@/components/Sidebar/FilterSidebar";
import Subscribe from "@/components/Subscribe/Subscribe";

function SecondPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto">
                <div className="flex justify-center md:gap-8">
                    <FilterSidebar></FilterSidebar>
                    <div className="md:w-9/12">
                        <LayoutShift></LayoutShift>
                        <Navigation></Navigation>
                    </div>
                </div>
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </>
    )
}

export default SecondPage;