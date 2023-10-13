import Footerpage from "@/components/Footerpage";
import Itskill from "@/components/Itskill";
import Management from "@/components/Management";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="w-[95%] m-auto">
      <div className="mt-12">
        <h1 className="font-[900] text-center md:text-[56px] text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Skills
        </h1>
        <div className="flex items-center justify-center mt-8">
          <Tabs defaultValue="management" className="w-full">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="management">Management Skills</TabsTrigger>
              <TabsTrigger value="it">IT Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="management">
              <Management />
            </TabsContent>
            <TabsContent value="it">
              <Itskill />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="mt-24">
        <hr className="w-full h-[2px] mb-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg" />
        <Footerpage />
      </div>
    </div>
  );
};

export default page;
