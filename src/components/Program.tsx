import {
  ProgramContent,
  ProgramFeatures,
  WhyChooseMindery,
} from "../types/data";

const Program = () => {
  return (
    <div className="mb-[4rem] space-y-2">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold">Programs for Every Age</h1>
        <p className="text-sm pb-4">
          Pick a track or mix and match. Each program grows withs child.
        </p>
      </div>

      <div className="space-y-4 mb-[4rem]">
        {ProgramContent.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row justify-between items-center gap-4 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <img
              src={item.picture}
              alt="image"
              className="w-120 h-full rounded-2xl object-cover"
            />
            <div className="space-y-2">
              <h1 className="font-bold">{item.heading}</h1>
              <p className="text-sm">{item.desc}</p>

              <ul className="flex gap-4 mt-2">
                {item.menu.map((item, index) => (
                  <li key={index} className="font-bold">
                    <span>{item.icon}</span>
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Build for Kids, Loved by Parents</h1>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {ProgramFeatures.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg space-y-2
            border-zinc-200"
            >
              <h1 className="font-bold">{item.title}</h1>
              <p className="font-normal text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-lg font-bold mt-4">
          Why Choose Mindery Kids Over Others?
        </h1>
        <div className="flex flex-col justify-between">
          <table>
            <thead className="bg-fuchsia-100/40">
              <tr>
                <th className="border border-zinc-300/50 px-4 py-2">
                  Features
                </th>
                <th className="border border-zinc-300/50 px-4 py-2">
                  Mindery Kids
                </th>
                <th className="border border-zinc-300/50 px-4 py-2">
                  Others Apps
                </th>
              </tr>
            </thead>
            <tbody>
              {WhyChooseMindery.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border border-zinc-300/50 px-4 py-2">
                    {item.feature}
                  </td>
                  <td className="border border-zinc-300/50 px-4 py-2">
                    ✅{item.MinderyKids}
                  </td>
                  <td className="border border-zinc-300/50 px-4 py-2">
                    ❌{item.otherApps}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Program;
