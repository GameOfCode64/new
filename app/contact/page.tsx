import Contactfrom from "@/components/Contactfrom";
import Footerpage from "@/components/Footerpage";

const contactpage = () => {
  return (
    <div className="w-[95%] m-auto">
      <div className="mt-12">
        <h1 className="font-[900] text-center text-[36px] md:text-[56px]  text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Contact Me!
        </h1>
      </div>
      <div className="mt-12">
        <Contactfrom />
      </div>
      <div className="mt-24">
        <hr className="w-full h-[2px] mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg" />
        <Footerpage />
      </div>
    </div>
  );
};

export default contactpage;
