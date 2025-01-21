import teru_logo from "../assets/teru_logo.png"


const FixedHeader = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img src={teru_logo} alt="logo" className="w-8 h-8 mr-2 rounded-full" />
            <h1 className="text-xl font-bold text-gray-800 py-3">てるフォト</h1>
          </div>
      </div>
    </header>
  );
};

export default FixedHeader;
