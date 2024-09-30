import Logo from "../ui/Logo";
import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="mt-14 py-2 px-5 flex flex-col sm:flex-row justify-between">
        <div className="z-50">
          <Logo hover={false} />
          <p className="dark:text-primary-light text-primary text-xs pt-2">
            This website does not retain any files on its server. Rather, it solely provides links to<br />media content hosted by third-party services.
          </p>
        </div>
        <div>
          <div className="flex sm:flex-col dark:text-primary-light text-primary max-sm:pt-5 max-sm:space-x-5 sm:space-y-2 pb-2">
            <Link title="Anime Homepage" className="z-50 hover:text-blue-400 transition-all" href="/anime">Anime</Link>
            <Link title="Manga Homepage" className="z-50 hover:text-blue-400 transition-all" href="/manga">Manga</Link>
            {/* <Link title="Movies Homepage" className="z-50 hover:text-blue-400 transition-all" href="/movies">Movies</Link>
            <Link title="Shows Homepage" className="z-50 hover:text-blue-400 transition-all" href="/shows">Shows</Link> */}
          </div>
        </div>
      </footer>
      <footer className="pb-10 px-5">
        <div className="pt-2 flex justify-between border-t-[2px] border-primary w-full">
          <p className="z-50 dark:text-primary-light text-primary text-sm">
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;




