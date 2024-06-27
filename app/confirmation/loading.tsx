import Loadercustom from "@/modules/components/loader/Loadercustom";
import Image from 'next/image'

export default function Loading() {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <Image
           src="/secloader.gif"
           width={100}
           height={100}
           alt="Picture of the author"
        />
      </div>
    )
  }