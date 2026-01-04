const ComponentLoader = () => {
  return (
    <div className="loader flex flex-col justify-center items-center h-[100vh]">
      <img
        src="https://images.squarespace-cdn.com/content/v1/5e4f221f6d2c262f925fe3fe/1589383385115-V8FXEO64X8ZQ2KS913A3/hotel_leifur_logo_web_green.png?format=1500w"
        alt="HOTEL LEIFUR EIRÍKSSON"
        className="w-[150px] mb-5"
      />
      <h5 className="text-boxes font-bold font-header text-2xl">
        Loading Page...
      </h5>
    </div>
  );
};

export default ComponentLoader;
