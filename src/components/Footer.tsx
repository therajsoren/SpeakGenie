import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="mb-[1rem] border-t border-t-zinc-200/70 p-4 grid md:grid-cols-2 grid-cols-1 justify-between gap-8">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="md:h-6 md:w-6 h-4 w-4 bg-gradient-to-b from-green-500 via-purple-700 to-red-500 rounded-md"></div>
          <h1 className="md:text-base text-sm font-bold">Topmind Care</h1>
        </div>
        <p className="text-xs pt-2">
          Mindfulness for growing minds. © {year} Mindery Kids.
        </p>
      </div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          <h1>Contact</h1>
          <div
            className="flex items-center gap-2
        text-sm text-purple-600/70"
          >
            <a href="">Instagram</a>
            <a href="">Youtube</a>
            <a href="">
              <BsTwitterX />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h1>Legal</h1>
          <div
            className="flex items-center gap-2
         text-sm text-purple-600/70"
          >
            <a href="">Privacy</a>
            <a href="">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
