import { MinderyKids } from "../types/data";

const WhyMinderyKids = () => {
  return (
    <div className="mt-[2rem] mb-[4rem]" id="why">
      <h1 className="md:text-4xl text-2xl font-bold pb-4">Why Mindery Kids?</h1>
      <p className="max-w-2xl text-base font-normal mb-4">
        Children learn best through play and stories. Our sessions blend gentle
        breathing, guided imagery, and music to make mindfulness enjoyable and
        effective.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {MinderyKids.map((item, index) => (
          <div key={index} className="border p-4 font-normal border-zinc-300 rounded-2xl space-y-1">
            <h1 className="rounded-2xl text-sm bg-green-200 w-fit text-emerald-800 px-2">{item.boxText}</h1>
            <h2 className="font-bold text-lg">{item.title}</h2>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyMinderyKids;
