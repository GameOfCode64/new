import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Footerpage from "@/components/Footerpage";
const page = () => {
  return (
    <div className="w-[95%] m-auto">
      <div className="mt-12">
        <h1 className="font-[900] text-center text-[56px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me!
        </h1>
        <div className="flex items-center justify-center">
          <div className="md:w-[660px] mt-8 w-full border-[1px] border-white/30 rounded-lg shadow-lg px-4 py-3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>test content</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, laboriosam. Reprehenderit voluptatum cupiditate
                  temporibus laboriosam similique voluptate voluptatibus,
                  tempore atque! Sequi recusandae, laudantium laboriosam tenetur
                  tempora quos quaerat tempore blanditiis, eius ipsam explicabo?
                  Placeat cumque adipisci temporibus. Nemo, nam officia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>new content</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, laboriosam. Reprehenderit voluptatum cupiditate
                  temporibus laboriosam similique voluptate voluptatibus,
                  tempore atque! Sequi recusandae, laudantium laboriosam tenetur
                  tempora quos quaerat tempore blanditiis, eius ipsam explicabo?
                  Placeat cumque adipisci temporibus. Nemo, nam officia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>This content</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, laboriosam. Reprehenderit voluptatum cupiditate
                  temporibus laboriosam similique voluptate voluptatibus,
                  tempore atque! Sequi recusandae, laudantium laboriosam tenetur
                  tempora quos quaerat tempore blanditiis, eius ipsam explicabo?
                  Placeat cumque adipisci temporibus. Nemo, nam officia.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>will content</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora, laboriosam. Reprehenderit voluptatum cupiditate
                  temporibus laboriosam similique voluptate voluptatibus,
                  tempore atque! Sequi recusandae, laudantium laboriosam tenetur
                  tempora quos quaerat tempore blanditiis, eius ipsam explicabo?
                  Placeat cumque adipisci temporibus. Nemo, nam officia.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
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
