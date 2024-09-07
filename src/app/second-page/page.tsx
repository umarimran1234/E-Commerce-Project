import Navbar from "@/components/Navbar/Navbar";
import FilterSidebar from "@/components/Sidebar/FilterSidebar";
import TopSection from "@/components/TopSection/TopSection";

function SecondPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex md:gap-10">
                <FilterSidebar></FilterSidebar>
                <TopSection></TopSection>
            </div>
        </>
    )
}

export default SecondPage;