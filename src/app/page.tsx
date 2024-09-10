import Banner from "@/components/Banner/Banner";
import DealsSection from "@/components/DealsSection/DealsSection";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <DealsSection />
    </div>
  );
}
