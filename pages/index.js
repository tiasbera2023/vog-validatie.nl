import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import security from "../public/assests/images/security.svg"
import banner from "../public/assests/images/VOG_nl.svg"
import card1 from "../public/assests/images/card1.svg"
import sec3 from "../public/assests/images/sec3.svg"
import arrowCircle from "../public/assests/images/arrow-circle.svg"
import logoCircle from "../public/assests/images/logo-circle.svg"
import user1 from "../public/assests/images/user1.png"
import companyList from "../public/assests/images/company-list.png"
import outlineArrow from "../public/assests/images/outline-arrow.svg"


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <section id="section1">
        <div className="container">
          <div  className="homesection1">
            <div>
          <p className="home-text-1">Hét online VOG-Loket</p>
          <h3 className="home-text-2">Snel én betrouwbaar een VOG?</h3>
          <Link href={"/request"}><p className="home-btn-1"><span>VOG nu aanvragen</span></p></Link>
          <p className="security-text-home"><Image src={security}/><span>Veilig online aangevraagd</span></p>
            </div>
          <div className="banner-img-box">
            <Image src={banner} className="banner-img"/>
          </div>
          </div>
        </div>
      </section>
      <section id="section2" className="container">
        <h3 className="sec2-h3">Een VOG aanvragen in drie <br/> simpele stappen</h3>
        <p className="sec2-subhead sec2-p">Een VOG aanvragen in drie simpele stappen</p>
        <div className="card-container">
        <div className="card">
        <Image src={card1}/>
        <p className="card-head">U vult het VOG aanvraagformulier in</p>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        </div>  
        <div className="card">
        <Image src={card1}/>
        <p className="card-head">U bevestigt uw aanvraag digitaal</p>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        </div>  
        <div className="card">
        <Image src={card1}/>
        <p className="card-head">U ontvangt uw VOG per post</p>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        </p>
        </div>    
        </div>
      </section>

      <section id="section3" className="container">
      <div className="sec3-img-container">
        <Image src={sec3} className="sec3-img"/>
      </div>
      <div className="s3-content">
        <h3>Wat is een VOG?</h3>
        <p>Een Verklaring Omtrent het Gedrag (VOG) is een verklaring van goed gedrag waaruit blijkt dat er geen bezwaar is om een bepaalde functie of taak uit te voeren. Werkgevers en organisaties kunnen bij aanvang van een dienstverband of vrijwilligerswerk een VOG vragen, maar u heeft soms ook een VOG nodig bij een aanvraag voor een visum of emigratie.</p>
        <div className="sec3-card">
          <h4>Belangrijk; de VOG wordt via VOG-Loket geleverd door Justis</h4>
          <p>U kunt snel en betrouwbaar een VOG aanvragen bij ons online loket. Dienst Justis doet vervolgens de screening en geeft de VOG af.</p>
          <div className="s3-card-icon"><Image src={arrowCircle}/> <span>Meer info</span></div>
        </div>
      </div>
      </section>
      
      <section id="section4" className="container">
        <div className="s4-img-container">
          <Image src={logoCircle}/>
        </div>
        <div className="s4-content">

        <h3>Direct VOG aanvragen</h3>
        <p>Bespaar tijd en administratiekosten</p>
        <p className="s4-btn">VOG nu aanvragen</p>
        </div>
      </section>
      <section id="section5" className="container">
        <h3>Wat mensen zeggen over het platform</h3>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="s5-card-container">
          <div className="s5-card"> 
            <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            <Image src={user1}/>
            </p>
            <h4 className="username-text">User Name</h4>
            <h4 className="position-text">Manager</h4>
          </div>
          <div className="s5-card"> 
            <p>  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            <Image src={user1}/>
            </p>
            <h4 className="username-text">User Name</h4>
            <h4 className="position-text">Manager</h4>
          </div>
          <div className="s5-card"> 
            <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            <Image src={user1}/>
            </p>
            <h4 className="username-text">User Name</h4>
            <h4 className="position-text">Manager</h4>
          </div>
        </div>
      </section>
      <section id="section6" className="container">
        <p>Al meer dan 1000<br/> organisaties vertrouwen 
        <br/>op VOG-validatie.nl</p>
        <div className="home-sec6-img">
        <Image src={companyList}/>
        </div>
      </section>
      <section id="section7" className="container">
      <h3>Meest gestelde vragen</h3>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="s7-card-container">
        {["Wanneer heeft u een VOG nodig?","VOG afgewezen, wat nu?","Wat is een VOG?","Wat kost een VOG?","Kan ik een VOG aanvragen met DigiD?","Waar kan ik een VOG aanvragen?","Kan ik een VOG aanvragen zonder werkgever?","Welke screeningsprofielen zijn er?"].map((data)=>(
      <div className="s7-card"><span>{data}</span><Image src={outlineArrow}/></div>
        ))}
      </div>
      </section>
      </main>
    </>
  );
}
