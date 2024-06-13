import Image from "next/image";
import CategorySection from "@/modules/components/categorysection"; 4
import HeroSection from "@/modules/components/herosection";
export default function Home() {
  return (
    <main>
      <div className="mt-3 h-[400px] flex justify-center ">
        <HeroSection />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <CategorySection />
      </div>
    </main>
  );
}
