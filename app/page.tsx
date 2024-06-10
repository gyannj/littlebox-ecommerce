import Image from "next/image";
import CategorySection from "@/modules/components/categorysection";4
import HeroSection from "@/modules/components/herosection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection/>
      <CategorySection/>
    </main>
  );
}
