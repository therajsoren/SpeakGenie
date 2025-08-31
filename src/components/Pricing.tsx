import { ParentAndTeacherHub, PricingContent } from "../types/data";

const Pricing = () => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-center flex-col p-4  bg-fuchsia-100/40">
        <h1 className="text-lg font-bold">Choose Your Plan</h1>
        <p className="text-base">
          Start free, cancel anytime. No hidden charges
        </p>
      </div>
      <div
        className="grid md:grid-cols-3 grid-cols-1 gap-4 p-8 
      mb-4 bg-fuchsia-100/40"
      >
        {PricingContent.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl bg-white
           border-zinc-100 p-4 space-y-2 shadow-xl"
          >
            <div className="flex items-center justify-center flex-col px-6 ">
              <h1 className="text-lg font-bold">{item.title}</h1>
              <p className="lg:text-base text-sm mt-2 whitespace-nowrap">{item.desc}</p>
              <h2 className="md:text-xl text-base mt-2 font-black text-purple-600/50">
                {item.pricing}
              </h2>
            </div>

            <ul className="text-left mt-2">
              {item.features.map((item, index) => (
                <li key={index} className="md:text-base text-sm">✅{item.text}</li>
              ))}
            </ul>

            <button
              className="flex items-center justify-center
                rounded-lg border w-fit mx-auto mt-4 px-2 bg-purple-600 text-zinc-200 font-bold
            "
            >
              {item.button}
            </button>
          </div>
        ))}
      </div>
      <div className=" bg-fuchsia-100/40 p-6 py-4 mt-[4rem] mb-[4rem]" id="Parents">
        <h1 className="md:text-4xl text-2xl font-bold">
          {ParentAndTeacherHub.title}
        </h1>
        <p className="md:text-base text-sm mt-2 max-w-2xl w-fit">
          {ParentAndTeacherHub.desc}
        </p>
        <div className="flex items-center md:gap-4 gap-1 mt-4">
          {ParentAndTeacherHub.menu.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border border-zinc-300/50 md:text-sm
              text-xs md:px-2 md:py-1 px-1 py-0.5 "
            >
              <span>{item.icon}</span>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Pricing;
