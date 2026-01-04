import "./gridStatement.css";

const GridStatement = () => {
  return (
    <div className="gridStatement_container flex flex-col items-center container mx-auto">
      <h1 className="font-header text-center text-2xl sm:text-4xl md:text-5xl mx-2 text-boxes font-semibold">
        About us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[80px] mx-[10px] max-w-[1100px] font-paragraph leading-[28px] capitalize font-semibold text-boxes">
        <p className="mx-[15px]">
          Sitting on the most iconic hill in Reykjavik, graced by the grand
          architecture of Hallgrimskirkja - Hotel Leifur Eiríksson tells a
          continuative tale of community, creativity and ambition. Run by the
          same family since 1999 - our beloved establishment is a welcoming
          escape in the heart of our eclectic capital.
        </p>
        <hr className="md:hidden" />
        <p className="mx-[15px] mt-[35px] md:mt-0">
          We recognize the surrounding nature of Reykjavik as a true luxury, we
          still get mesmerized by the ocean waves and birds’ tunes all year
          round. We encourage our guests to celebrate the vibrancy of the
          Icelandic food scene, indulge in a good nights sleep and take a swim
          in the neighbouring pool.
        </p>
        <hr className="md:hidden" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-[25px] mx-[10px] max-w-[1100px] text-boxes font-semibold capitalize leading-[28px] font-paragraph">
        <p className="mx-[15px]">
          The intimacy of our bespoke service isn’t the conventional luxury,
          instead of an organically tailor-made experience with personal
          recommendations and local expertise - restaurants, art, wellness, and
          culture that build the narrative of Icelandic modernity and historic
          tales. Upon your request we’ll thoughtfully build your itinerary
          exploring the magic of Iceland - caves, glaciers, hot springs, horses,
          lagoons and otherworldly water.
        </p>
        <hr className="md:hidden" />
        <p className="mx-[15px] mt-[35px] md:mt-0">
          As far as the neighbourhood goes, we’ll fill you in on the collage
          that is the culture of 101 Reykjavik - from coffee shops and indie
          boutiques, fun hangouts, yummy food, buzzing bars, and the cool 101
          crowds. We also love those spots that are a bit raw around their edges
          - they’re the ideal marriage to the stunning mountains that draw our
          city.
        </p>
      </div>
    </div>
  );
};

export default GridStatement;
