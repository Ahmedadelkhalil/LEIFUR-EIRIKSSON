import { Link } from "react-router-dom";

const Family = () => {
  return (
    <div className="family_container flex flex-col items-center container mx-auto">
      <h1 className="font-header text-center text-2xl md:text-4xl mx-2 text-boxes font-semibold">
        Family run and friendly
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 my-[50px] mx-[10px] max-w-[1100px] text-boxes font-semibold capitalize leading-[28px] font-paragraph">
        <p className="mx-[15px]">
          Sitting on the most iconic hill in Reykjavik, graced by the grand
          architecture of Hallgrimskirkja - Hotel Leifur Eiríksson tells a
          continuative tale of community, creativity and ambition. Run by the
          same family since 1999 - our beloved establishment is a welcoming
          escape in the heart of our eclectic capital.
        </p>
        <p className="mx-[15px] mt-[35px] md:mt-0">
          We recognize the surrounding nature of Reykjavik as a true luxury, we
          still get mesmerized by the ocean waves and birds’ tunes all year
          round. We encourage our guests to celebrate the vibrancy of the
          Icelandic food scene, indulge in a good nights sleep and take a swim
          in the neighbouring pool.
        </p>
      </div>
      <Link to="/About">
        <button className="uppercase tracking-widest border-2 border-boxes p-3 md:p-5 text-boxes font-semibold hover:bg-boxes hover:text-white transition duration-300 ease-in-out">
          learn more
        </button>
      </Link>
    </div>
  );
};

export default Family;
