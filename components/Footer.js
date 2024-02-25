import Head from "next/head";
import Image from "next/image";
import Logo from "../public/assests/images/footer.svg"

export default function Home() {
  return (
    <>
      <main id="footer">
    <section  className="container">
         <Image src={Logo}/>
         <div className="footer-content-box">
         <div className="footer-content">
            <span className="f-head-text">VOG-validatie.nl</span>
            <span className="f-sub-text">Marie Curiestraat 2</span>
            <span className="f-sub-text">7442 DP Nijverdal</span>
            <span className="f-sub-text">info@vog-validatie.nl</span>
         </div>
         <div className="footer-content">
            <span className="f-head-text">Veelgestelde vragen</span>
            <span className="f-sub-text">Wat is een VOG?</span>
            <span className="f-sub-text">Welke screeningsprofielen zijn er?</span>
            <span className="f-sub-text">Wat kost een VOG?</span>
            <span className="f-sub-text">Hoelang duurt een VOG-aanvraag?</span>
            <span className="f-sub-text">Kan ik een VOG aanvragen met DigiD?</span>
            <span className="f-sub-text">Kan ik een VOG aanvragen zonder
werkgever?</span>
            <span className="f-sub-text">Terugkijktermijn van een VOG</span>
            <span className="f-sub-text">VOG afgewezen, wat nu?</span>
         </div>
         <div className="footer-content">
            <span className="f-head-text">VOG aanvragen voor</span>
            <span className="f-sub-text">Onderwijs</span>
            <span className="f-sub-text">Defensie</span>
            <span className="f-sub-text">Taxibranche</span>
            <span className="f-sub-text">Bezorger of koerier</span>
            <span className="f-sub-text">Kinderopvang</span>
            <span className="f-sub-text">Zorg</span>
            <span className="f-sub-text">ZZP’er</span>
            <span className="f-sub-text">ICT</span>
         </div>
         <div className="footer-content">
            <span className="f-head-text">Algemeen</span>
            <span className="f-sub-text">VOG aanvragen</span>
            <span className="f-sub-text">VOG aanvraag Engelse taal</span>
            <span className="f-sub-text">Contact</span>
            <span className="f-sub-text">Over ons</span>
            <span className="f-sub-text">Algemene voorwaarden</span>
            <span className="f-sub-text">Privacy statement</span>
            <span className="f-sub-text">Cookiebeleid</span>
         </div>
         </div>
    </section>
      </main>
      <section className="footer-bottom">
        <div className="container f-bottom-content">
        <span className="copyright">© 2024 - VOG-validatie</span>
        <span>Algemene voorwaarden</span>
        <span>Privacy statement</span>
        <span>Cookiebeleid</span>
        <span>VOG per gemeente</span>
        </div>
      </section>
    </>
  );
}
