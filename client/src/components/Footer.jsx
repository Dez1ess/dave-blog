const Footer = () => {
  return (
    <footer className="mt-28 w-full flex flex-col items-center">
    <hr className="w-4/5" />
      <div className="py-10 px-10 sm:px-0 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-evenly w-full sm:items-center text-slate-400">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-slate-100">Dave's Blog</h1>
        </div>
        <hr className="border-gray-600" />
        <p>© 2024 by Dave. &nbsp;All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
