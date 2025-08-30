const Navbar = () => {
  return (
    <nav className="mt-[2rem] p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 bg-gradient-to-b from-green-500 via-purple-700 to-red-500 rounded-md">
          </div>
          <h1 className="text-2xl font-bold">
            Topmind Care
          </h1>
        </div>
        <div className="flex justify-between items-center gap-4 text-purple-800/70 font-bold">
          <a href="">Why</a>
          <a href="">Programs</a>
          <a href="">Features</a>
          <a href="">For Parents</a>
          <a href="">FAQ</a>
          <button className="bg-purple-800/70 rounded-lg p-1 px-2 text-white font-medium">Start Free</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
