import { useState } from "react";
import { FAQContent, TestmonialContent } from "../types/data";

const Testmonial = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="mt-[2rem] mb-4">
      <div className="space-y-4">
        <h1 className="md:text-4xl text-2xl font-bold">What Families Say</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          {TestmonialContent.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 shadow-2xl
              flex flex-col space-y-2 p-2 bg-white text-sm
              "
            >
              <div className="flex text-yellow-500">{"⭐".repeat(5)}</div>
              <p className="tracking-wide italic">"{item.message}"</p>
              <address className="pl-4 not-italic font-semibold">
                - {item.author}
              </address>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 mt-12" id="FAQ">
        <h1 className="md:text-4xl text-2xl font-bold">Frequently Asked Questions</h1>
        <div className="border rounded-lg border-zinc-300/50 p-4 bg-purple-200/40">
          {FAQContent.map((item, index) => (
            <div key={index}>
              <button onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center font-semibold">
                {item.question}
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && <p className="px-4 py-3 border-t border-t-zinc-300/50">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Testmonial;
