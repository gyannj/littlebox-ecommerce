import Image from "next/image";
import CategorySection from "@/modules/components/categorysection";4
import HeroSection from "@/modules/components/herosection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between p-24 bg-dark-1">
      <HeroSection/>
      <CategorySection/>
    </main>
  );
}
