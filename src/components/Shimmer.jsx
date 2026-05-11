const Shimmer = () => {
  const cards = [];
  for (let i = 0; i < 30; i++) {
    cards.push(<div key={i} className="w-60  h-70 bg-white p-3.5 m-4"></div>);
  }

  return (
    <div>
      <div className=" m-5 w-full h-18.75 bg-slate-200 rounded-2xl flex items-center">
        <input className="m-4 p-2 bg-white" />
        <button className="px-7 py-5 w-25 bg-white"></button>
        <button className=" m-3 px-7 py-5 w-25  bg-white"></button>
        <button className=" px-7 py-5 w-25  bg-white"></button>
        </div>
      <div className="grid grid-cols-4 gap-3.5 p-7 m-7 bg-slate-200">
        {cards}
      </div>
    </div>
  );
};
export default Shimmer;
