import Banner from "@/components/Banner";
import BottomPhotosCard from "@/components/BottomPhotosCard";
import TopGeneration from "@/components/TopGeneration";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopGeneration />
      {/* <BottomPhotosCard /> */}
    </div>
  );
}
