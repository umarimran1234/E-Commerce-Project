import Navbar from "@/components/Navbar/Navbar";
import Navigation from "@/components/Navigation/Navigation";
import Products from "@/components/Products/Products";
import FilterSidebar from "@/components/Sidebar/FilterSidebar";
import Subscribe from "@/components/Subscribe/Subscribe";
import TopSection from "@/components/TopSection/TopSection";

function SecondPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex md:gap-8">
                <FilterSidebar></FilterSidebar>
                <div className="md:w-9/12 w-8/12">
                    <TopSection></TopSection>
                    <Products></Products>
                    <Navigation></Navigation>
                </div>
            </div>
            <Subscribe></Subscribe>
        </>
    )
}

export default SecondPage;