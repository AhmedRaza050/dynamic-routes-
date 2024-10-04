import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-extrabold"> Welcome to the Home page</h1>
      <Link className="text-3xl font-bold" href="/about">ABOUT</Link> &nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
      <Link  className="text-3xl font-bold" href="/contact">CONTACT</Link>&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;
      <Link className="text-3xl font-bold" href="/country">COUNTRY</Link>&nbsp;&nbsp;&nbsp; 
    </div>
  );
}

export default HomePage;