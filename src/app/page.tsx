import Banner from "@/components/Banner/Banner";
import DealsSection from "@/components/DealsSection/DealsSection";
import ConsumerElectronics from "@/components/HomeAndOutdoor/ConsumerElectronics";
import HomeAndOutdoor from "@/components/HomeAndOutdoor/HomeAndOutdoor";
import Navbar from "@/components/Navbar/Navbar";
import QuoteForm from "@/components/QuoteForm/QuoteForm";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <DealsSection></DealsSection>
      <HomeAndOutdoor></HomeAndOutdoor>
      <ConsumerElectronics></ConsumerElectronics>
      <QuoteForm></QuoteForm>
    </div>
  );
}
