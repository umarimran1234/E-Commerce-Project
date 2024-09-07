import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import FilterSidebar from "@/components/Sidebar/FilterSidebar";
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
                </div>
            </div>
        </>
    )
}

export default SecondPage;