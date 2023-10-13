import Footerpage from "@/components/Footerpage";
import Heropage from "@/components/Heropage";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="w-[95%] m-auto">
        <Heropage />

        <div className="mt-24">
          <hr className="w-full h-[2px] mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg" />
          <Footerpage />
        </div>
      </div>
    </div>
  );
}
