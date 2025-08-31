const CTA = () => {
  return (
    <div className="rounded-lg p-4 space-y-2 bg-purple-200/40 mt-[4rem] mb-[3rem]">
      <h1 className="md:text-2xl text-xl font-bold">Start Your Child's Mindfulness Journey</h1>

      <p className="md:text-base text-sm">
        Try it free. Build calm, focus, and kindness-one small practice a day.
      </p>
      <div className="space-x-4">
        <button className="bg-purple-800/70 rounded-lg p-1 px-2 text-white shadow-xl md:text-sm text-xs cursor-pointer">
          Create Account
        </button>
        <button className="bg-green-500/70 rounded-lg p-1 px-2 text-white shadow-xl md:text-sm text-xs cursor-pointer">
          Download App
        </button>
      </div>
    </div>
  );
};
export default CTA;
