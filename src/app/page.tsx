import Banner from "@/components/Banner/Banner";
import DealsSection from "@/components/DealsSection/DealsSection";
import ExtraServices from "@/components/ExtraServices/ExtraServices";
import Footer from "@/components/Footer/Footer";
import ConsumerElectronics from "@/components/HomeAndOutdoor/ConsumerElectronics";
import HomeAndOutdoor from "@/components/HomeAndOutdoor/HomeAndOutdoor";
import Navbar from "@/components/Navbar/Navbar";
import QuoteForm from "@/components/QuoteForm/QuoteForm";
import RecommendedItems from "@/components/Recommended/Recommended";
import Subscribe from "@/components/Subscribe/Subscribe";
import SuppliersByRegion from "@/components/Suppliers/Suppliers";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <DealsSection></DealsSection>
      <HomeAndOutdoor></HomeAndOutdoor>
      <ConsumerElectronics></ConsumerElectronics>
      <QuoteForm></QuoteForm>
      <RecommendedItems></RecommendedItems>
      <ExtraServices></ExtraServices>
      <SuppliersByRegion></SuppliersByRegion>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}
