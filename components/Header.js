import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Logo from "../public/assests/images/Logo.svg"
import arrow from "../public/assests/images/arrow-icon.svg"
import menu from "../public/assests/images/Menu.svg"

export default function Home() {
  return (
    <> 
      <main>
      <section id="header">
        <div className="container header">
        <Link href={"/"}><Image src={Logo}/></Link>
        <div className="header-div">
        <h4 >VOG nu aanvragen <span><Image src={arrow}/></span></h4>
        <div className="Menu-icon">
        <Image src={menu}/>
        <span>Menu</span>
        </div>
        </div>
        </div>
      </section>
      </main>
    </>
  );
}
