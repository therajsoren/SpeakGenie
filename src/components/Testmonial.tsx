import { TestmonialContent } from "../types/data";

const Testmonial = () => {
  return (
    <div className="mt-[2rem]">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">What Families Say</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-4 space-y-4">
          {TestmonialContent.map((item, index) => (
            <div
              key={index}
              className="rounded-md border border-gray-200 shadow-2xl
              flex flex-col space-y-2 p-2
              "
            >
              {/* star will be added later */}

              <p className="tracking-wide">"{item.message}"</p>
              <address className="pl-4">-{item.author}</address>
            </div>
          ))}
        </div>
      </div> 
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>

      </div>
    </div>
  );
};
export default Testmonial;
