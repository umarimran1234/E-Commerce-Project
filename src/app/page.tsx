import Banner from "@/components/Banner/Banner";
import DealsSection from "@/components/DealsSection/DealsSection";
import ConsumerElectronics from "@/components/HomeAndOutdoor/ConsumerElectronics";
import HomeAndOutdoor from "@/components/HomeAndOutdoor/HomeAndOutdoor";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <DealsSection></DealsSection>
      <HomeAndOutdoor></HomeAndOutdoor>
      <ConsumerElectronics></ConsumerElectronics>
    </div>
  );
}
