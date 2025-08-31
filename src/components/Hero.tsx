import { HeroBoxContent, HeroImageAbove } from "../types/data";

const Hero = () => {
  return (
    <main className="mt-[4rem] p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        <div className="mt-[2rem]">
          <div className="rounded-lg bg-purple-300/50 text-purple-800/90 w-fit font-bold px-1 py-1 text-sm">
            🌈Calm Minds, Happy Hearts
          </div>
          <div className="space-y-4">
            <h1 className="md:text-5xl text-3xl font-semibold mt-2">
              Mindfulness &{" "}
              <span className="break-normal lg:whitespace-nowrap">
                Meditation for Kids(4
              </span>
              -14)
            </h1>
            <p>
              Fun, story-based mediations that build focus, kindness, and
              confidence. Safe, ad-free, and crafted with child-development
              experts.
            </p>
            <div className="flex items-center gap-4 md:text-base text-sm">
              <button className="bg-purple-800/70 rounded-lg p-1 px-2 text-white">
                Start Free Trial
              </button>
              <button className="bg-green-500/70 rounded-lg p-1 px-2 text-white">
                Explore Programs
              </button>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
              {HeroBoxContent.map((item, index) => (
                <div
                  key={index}
                  className="p-2 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-200/50 shadow-xl"
                >
                  {item.icon}
                  <h1 className="md:text-base text-sm">
                    {item.heading}
                    <span className="block">{item.label}</span>
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="w-fit mx-auto relative">
            <div
              className="absolute bottom-[50px] left-[-30px] border border-zinc-200 rounded-lg p-4 bg-white shadow-lg z-10 transform -rotate-12"
              style={{
                transform: "(-8deg) rotateX(8deg)",
              }}
            >
              {HeroImageAbove.map((item, index) => (
                <div key={index}>
                  <h1 className="text-lg font-bold">{item.heading}</h1>
                  <ul className="list-disc list-inside text-base space-y-2">
                    {item.list.map((item, index) => (
                      <li key={index}>
                        {item.icon}
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <img
              src="hero-image.jpg"
              alt="Hero Image"
              className="h-130 w-200 object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Hero;
