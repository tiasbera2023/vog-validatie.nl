import Head from "next/head";
import Image from "next/image";
import security from "../public/assests/images/security.svg"
import step1 from "../public/assests/images/step1.svg"
import step2 from "../public/assests/images/step2.svg"
import step3 from "../public/assests/images/step3.svg"
import step4 from "../public/assests/images/step4.svg"
import banner from "../public/assests/images/Union.svg"
import book from "../public/assests/images/book.svg"
import outlineArrow from "../public/assests/images/outline-arrow.svg"


export default function Request() {
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
        <div className="request-section-box">
        <div className="req-1-box">
            <div className="request-1">
                <h3 className="req-1-head">Stappen VOG aanvraag</h3>
                <div className="request-1-left">
                <div className="step-indicator">
                    <Image src={step1}/>
                    <span className="line"></span>
                    <Image src={step2}/>
                    <span className="line"></span>
                    <Image src={step3}/>
                    <span className="line"></span>
                    <Image src={step4}/>
                </div>
                <div className="step-content">
                <div>
                    <h3 className="fw-bold">Invullen gegevens</h3>
                    <p>Na de vragen volledig ingevuld te hebben, betaalt u een bedrag vanaf €12,50.</p>
                </div>
                <div>
                    <h3>E-mail Dienst Justis</h3>
                    <p>Binnen 24 uur ontvangt u een e-
mail van Dienst Justis waar u uw
aanvraag kan bevestigen.</p>
                </div>
                <div>
                    <h3>Betalen aan Justis</h3>
                    <p>Bevestig de aanvraag via de mail
van Dienst Justis met uw DigiD.
Hiervoor wordt € 33,85
gevraagd.</p>
                </div>
                <div>
                    <h3>Thuis per post</h3>
                    <p>Na goedkeuring van de aanvraag
ontvangt u de VOG per post
doorgaans binnen een week op
uw huisadres..</p>
                </div>
                </div>
                </div>
                <Image className="request-1-img" src={banner}/>
                <Image className="request-1-imgbook" src={book}/>
            </div>
            </div>
            <div className="req-2-box">
            <div className="request-2">
            <p className="security-text"><Image src={security}/><span>Veilig online aangevraagd</span></p>
            <div className="form-container">
                <h3 className="form-head">VOG aanvragen</h3>
                <p className="form-subhead">Binnen één minuut een VOG aanvragen!</p>
                <form id="request-form">
                    <div>
                        <label>Waarvoor is de VOG nodig?</label>
                        <input placeholder="Werk(en) bij een bedrijf of instelling"/>
                    </div>
                    <div>
                        <label>Organisatie / instelling die de VOG van u verlangt</label>
                        <input placeholder="Werk(en) bij een bedrijf of instelling"/>
                    </div>
                    <div>
                        <label>Gegevens aanvrager</label>
                        <input placeholder="Voorletter(s) + Achternaam"/>
                    </div>
                    <div>
                        <label>E-mailadres</label>
                        <input placeholder=""/>
                    </div>
                    <div>
                        <label>Functietitel</label>
                        <input placeholder=""/>
                    </div>
                    <div>
                        <label>Weet u op welke profielen u gescreend moet worden?</label>
                        <div className="radio-label-box"><input name="1" className="form-radio-btn" type="radio"/><span>Ja, (ik weet het zeker)</span></div>
                        <div className="radio-label-box"><input name="1" className="form-radio-btn" type="radio"/><span>Nee, (ik twijfel)</span></div>
                    </div>
                    <div>
                        <label>Selecteer screeningsprofiel:</label>
                        
                        <div className="radio-label-box"><input name="2" className="form-radio-btn" type="radio"/> <span>Specifiek screeningsprofiel*</span></div>
                        <div className="radio-label-box"><input name="2" className="form-radio-btn" type="radio"/> <span>Algemeen screeningsprofiel*</span></div>
                    
                    </div>
                    <div>
                        <label>Zijn er bijzondere omstandigheden m.b.t. de aanvraag?</label>
                        <div className="radio-label-box"><input name="2" className="form-radio-btn" type="radio"/> <span>ja</span></div>
                        <div className="radio-label-box"><input name="2" className="form-radio-btn" type="radio"/> <span>Nee</span></div>
                    </div>
                    <div>
                        <label>Akkoordverklaring online aanvraag VOG</label>
                        <div className="checkbox-label-box"><input type="checkbox" className="form-check-box"/><span className="checkbox-label">Ik ga akkoord met de algemene voorwaarden</span></div>
                    </div>
                    <div>
                        <button className="req-form-btn">Betalen & Verzenden</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
      </section>
      <section id="section2" className="container">
        <div>
            <h3>Verklaring omtrent goed gedrag</h3>
            <p>U ontvangt een bewijs van goed gedrag, ook wel Verklaring Omtrent het Gedrag (VOG), wanneer u in het verleden geen strafbare feiten heeft gepleegd die invloed hebben op het uit oefenen van uw functie. Door het invullen van het bovenstaande formulier vraagt u online een VOG aan. Onze service medewerkers zullen uw aanvraag binnen 48 uur behandelen, waarna u gelijk bericht krijgt van Dienst Justis om de aanvraag te bevestigen. Als u bij een werkgever in loondienst gaat, vrijwilligerswerk gaat doen of een visum of emigratie wilt aanvragen, kunt u gevraagd worden om een Verklaring Omtrent het Gedrag (VOG). In deze verklaring staat dat er op basis van uw gedrag geen bezwaar is om een bepaalde taak of functie te vervullen. Vooral in het onderwijs, de zorg en sociaal- maatschappelijke organisaties is een VOG vaak wettelijk verplicht. Meer weten? Lees ook: Wat is een VOG?</p>
        </div>
        <div>
            <h3>Welk screeningsprofiel moet ik kiezen?</h3>
            <p>Er zijn verschillende beroepen en daarom ook verschillende screeningsprofielen. Zorg daarom dat u het juiste screeningsprofiel aangeeft op het aanvraagformulier. Er bestaan twee soorten screeningsprofielen, namelijk het algemeen screeningsprofiel en het specifiek screeningsprofiel. Deze screeningsprofielen zijn daarnaast ook opgedeeld in verschillende risicogebieden. Meer weten over de screeningsprofielen en welke je moet kiezen? Lees dan: Welke screeningsprofielen zijn er?</p>
        </div>
        <div>
            <h3>VOG met spoed aanvragen</h3>
            <p>Als u dringend een Verklaring Omtrent het Gedrag (VOG) nodig heeft, kunt u bij het VOG-Loket een spoed VOG aanvraag doen tegen een bijbetaling van € 10,00. Een reguliere aanvraag wordt bij ons binnen 2 werkdagen verwerkt, maar wanneer u een spoedaanvraag indient, wordt uw VOG binnen 4 uur verwerkt. Het spoedproces versnelt de verwerking van de aanvraag, zodat u zo snel mogelijk over het benodigde document kunt beschikken. Houd er echter rekening mee dat de screening door Dienst Justis nog moet plaatsvinden nadat uw spoedaanvraag is verwerkt. Het duurt gemiddeld tussen de 1 en 4 weken voordat u uw VOG ontvangt van Dienst Justis. Zorg ervoor dat u alle benodigde documenten en informatie paraat heeft voordat u de aanvraag indient, om het proces zo soepel mogelijk te laten verlopen.</p>
        </div>
        <div>
            <h3>Wat staat er in een Verklaring Goed Gedrag?</h3>
            <p>Een VOG, ook wel verklaring goed gedrag genoemd, is een belangrijk document dat is opgedeeld in drie delen. Eerst zijn er de persoonlijke gegevens zoals uw naam, geslacht, adres en geboortedatum. Ten tweede bevat het document de reden van uw aanvraag, bijvoorbeeld voor werk of een speciale gelegenheid. Ten derde geeft het document het screeningsprofiel weer waarop u bent gescreend door Dienst Justis. Deze gegevens biedt werkgevers de mogelijkheid om te controleren of u geschikt bent voor de taak of functie waarvoor u de VOG aanvraagt. Precies weten wat er in een VOG staat? Lees dan onze pagina: Wat staat er in een VOG.</p>
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
