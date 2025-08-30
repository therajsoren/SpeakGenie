import { HeroBoxContent } from "../types/data";

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
              <span className="break-normal whitespace-nowrap">
                Meditation for Kids (4
              </span>
              -14)
            </h1>
            <p>
              Fun, story-based mediations that build focus, kindness, and
              confidence. Safe, ad-free, and crafted with child-development
              experts.
            </p>
            <div className="flex items-center gap-4">
              <button className="bg-purple-800/70 rounded-lg p-1 px-2 text-white">
                Start Free Trial
              </button>
              <button className="bg-green-500/70 rounded-lg p-1 px-2 text-white">
                Explore Programs
              </button>
            </div>
            <div className="flex gap-2">
              {HeroBoxContent.map((item, index) => (
                <div
                  key={index}
                  className="p-2 flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-200/50 shadow-xl"
                >
                  {item.icon}
                  <h1>
                    {item.heading}
                    <span className="block">{item.label}</span>
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="w-fit mx-auto">
            <img
              src="hero-image.jpg"
              alt="Hero Image"
              className="h-130 w-200 object-cover"
            />
          </div>

          <div>{/* will be done in future */}</div>
        </div>
      </div>
    </main>
  );
};
export default Hero;
