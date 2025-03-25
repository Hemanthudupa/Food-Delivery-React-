const Loader = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-around items-center overflow-scroll">
      <div className="h-[40vh] w-full flex justify-around items-center flex-wrap">
        <div className="h-[40vh] w-[35vw] border-x-2 bg-green-50"></div>
        <div className="h-[40vh] w-[35vw] border-x-2 bg-green-50"></div>
      </div>
      <div className="h-[40vh] w-full flex justify-around items-center flex-wrap">
        <div className="h-[40vh] w-[35vw] border-x-2 bg-green-50"></div>
        <div className="h-[40vh] w-[35vw] border-x-2 bg-green-50"></div>
      </div>
    </div>
  );
};
export default Loader;
