import Link from "next/link";

function Logo({ hover = true }) {
  return (
    <Link href="/">
      <div title="SushiStream" className={`dark:text-secondary text-primary text-3xl font-black ${hover === true ? "hover:scale-105" : ""} transition-all`}>SushiStream</div>
    </Link>
  );
}

export default Logo;