import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="mb-4  justify-items-center">
      <div>
        <img height={100} width={100} src="/Tesla_logo.png" className=""></img>
      </div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Robject/FTW">List Of Cat</Link>
      </div>
    </nav>
  );
};

export default NavBar;
