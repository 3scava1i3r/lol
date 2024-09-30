import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaPlay, FaBook, FaStar } from 'react-icons/fa';
import Link from "next/link";
import { sanitize } from "isomorphic-dompurify";

function MangaCarousel({ data }) {
  const type = {
    MANGA: "Manga",
    ONE_SHOT: "One Shot",
    NOVEL: "Novel",
    DOUJIN: "Doujin",
    MANHWA: "Manhwa",
  }

  return (
    <div className="rounded-lg overflow-hidden">
      <Carousel
        showThumbs={false}
        autoPlay
        interval={5000}
        infiniteLoop
        showStatus={false}
        emulateTouch
        showIndicators={false}
      >
        {data
          .filter(manga => manga.cover && manga.image && manga.cover !== manga.image)
          .slice(0, 15)
          .map((manga, index) => (
            <div key={index} className="h-96 relative">
              <img
                src={manga.cover}
                alt={manga.title.english || manga.title.romaji}
                className="w-full h-full object-cover select-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80 select-none"></div>
              <h2 title={manga.title.english || manga.title.romaji} className="absolute text-left top-1/4 md:top-1/2 ml-2 sm:ml-10 pb-2 transform -translate-y-1/2 overflow-auto text-white text-xl font-bold select-none sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">{manga.title.english || manga.title.romaji}</h2>
              <div className="absolute ml-2 sm:ml-10 transform top-[calc(25%+1rem)] md:top-[calc(50%+1rem)] text-left">
                <div className="flex space-x-2 mt-2 text-white select-none">
                <p title={`Type: ${type[manga.type]}`}>
                    <span className="flex items-center">
                      <FaBook />
                      <span className="ml-1">{type[manga.type]}</span>
                    </span>
                  </p>
                  <p title={`Rating: ${manga.rating}`}>
                    <span className="flex items-center">
                      <FaStar />
                      <span className="ml-1">{manga.rating}</span>
                    </span>
                  </p>
                </div>
                <div className="text-white mt-2 max-w-[90%] md:max-w-[40%] max-h-24 overflow-auto select-none scrollbar-hidden-background" dangerouslySetInnerHTML={{ __html: sanitize(manga.description) }}></div>
              </div>
              <Link href={"/manga/info/" + manga.id}>
                <button title={`Watch ${manga.title.english || manga.title.romaji}`} className="absolute bottom-10 right-10 backdrop:filter transition-all bg-slate-400 bg-opacity-30 backdrop-blur-md text-white px-6 py-4 md:px-4 md:py-2 rounded-full md:rounded select-none text-2xl font-bold hover:scale-110 hover:text-blue-300"><span className="flex items-center"><FaPlay /><span className="hidden sm:inline ml-1">Read</span></span></button>
              </Link>
            </div>
          ))}
      </Carousel>
    </div>
  );
}

export default MangaCarousel;