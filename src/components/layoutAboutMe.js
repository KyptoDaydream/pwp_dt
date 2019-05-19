/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"

import Burger from "./burger"
import Social from "./social"

import avatar_default from "../images/avatar_orange.png"
import avatar_hover from "../images/avatar_green.png"
import aboutme_1 from "../images/aboutme_1.jpg"
import aboutme_2 from "../images/aboutme_2.jpg"
import aboutme_3 from "../images/aboutme_3.jpg"
import aboutme_4 from "../images/aboutme_4.jpg"
import aboutme_5 from "../images/aboutme_5.jpg"
import aboutme_6 from "../images/aboutme_6.jpg"
import aboutme_7 from "../images/aboutme_7.jpg"
import aboutme_8 from "../images/aboutme_8.jpg"
import aboutme_9 from "../images/aboutme_9.jpg"
import aboutme_10 from "../images/aboutme_10.jpg"
import aboutme_11 from "../images/aboutme_11.jpg"
import aboutme_12 from "../images/aboutme_12.jpg"
import aboutme_13 from "../images/aboutme_13.jpg"
import aboutme_14 from "../images/aboutme_14.jpg"
import aboutme_15 from "../images/aboutme_15.jpg"
import aboutme_16 from "../images/aboutme_16.jpg"
import aboutme_17 from "../images/aboutme_17.jpg"
import aboutme_18 from "../images/aboutme_18.jpg"
import aboutme_19 from "../images/aboutme_19.jpg"
// import aboutme_20 from "../images/aboutme_20.jpg"
import aboutme_21 from "../images/aboutme_21.jpg"
import monkey from "../images/monkey.svg"
// import banana from "../images/banana.svg"
import scroll_down_img from "../images/scrolldown_dark.svg"
import arrow_down from "../images/arrow_down.svg"

const PageWrapper = styled.div `
  width: 100vw;
  background: var(--white);
`

const AboutMeWrapper = styled.div `
  max-width: 900px;
  margin: 0 auto;
  .text_blok {
    margin: 200px auto;
    max-width: 550px;
    position: relative;
    p {
      color: var(--bg_black);
      margin: 0 auto 21px;
    }
    a {
      color: var(--bg_black);
      text-decoration: none;
      background-image: linear-gradient(120deg, #27fb6b 0%, #27fb6b 100%);
      background-repeat: no-repeat;
      background-size: 100% 0.2em;
      background-position: 0 88%;
      transition: background-size 0.25s ease-in;
      &:hover {
        color: var(--bg_black);
        text-decoration: none;
        background-size: 100% 88%;
      }
    }
  }
  img {
    width: 100%;
    &.last {
      margin-bottom: 200px;
    }
  }
`

const AvatarButton = styled.div `
  display: block;
  position: fixed;
  top: 20px;
  left: 50px;/* 50%;
  margin-left: -50px; */
  background: url(${avatar_default}) center center no-repeat;
  background-size: cover;
  width: 100px;
  height: 110px;
  transition: 0.6s;
  z-index: 99997;
  cursor: pointer;
  &:hover {
    background: url(${avatar_hover}) center center no-repeat;
    background-size: cover;
  }
`

const BurgerWrapper = styled.div `
  position: fixed;
  width: 50px;
  height: 50px;
  top: 0;
  right: 0;
  z-index: 99999;
`
const Introduction = styled.div `
  max-width: 550px;
  margin: 0 auto;
  padding-top: 200px;
  padding-bottom: 40px;
  border-bottom: 2px solid var(--bg_black);
  h1 {
    position: relative;
    margin-bottom: 40px;
    margin-left: 0px;
    margin-top: 0px;
    max-width: 550px;
    color: var(--bg_black);
  }
`
const Monkey = styled.img `
  width: 100px;
  max-width: 100px;
  padding-top: 40px;
`
const ScrollDownWrapper = styled.div `
  width: 84px;
  height: 84px;
  position: fixed;
  bottom: 40px;
  right: 50px;
  z-index: 99998;

  .hover_orange {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 12px;
    left: 12px;
    border-radius: 70px;
    background-color: var(--orange);
    background-image: url(${arrow_down});
    background-size: 20%;
    background-position: center center;
    background-repeat: no-repeat;
    display: block;
    opacity: 1;
    transition: 1s
  }
  &:hover .hover_orange {
    background-color: var(--green);
  }
`
const ScrollDownSvg = styled.img `
  width: 100%;
  height: 100%;
  animation:spin 8s linear infinite;
  @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
`

const LayoutAboutMe = ({ children }) => ( 
  <PageWrapper>
    <Link to="/">
      <AvatarButton />
    </Link>
    <BurgerWrapper>
      <Burger burger_color="burger_black"/>
    </BurgerWrapper>
    <Social icon='linkedin' />
    <Social icon='medium' />
    <Social icon='goodreads' />
    <ScrollDownWrapper>
      <ScrollDownSvg src={scroll_down_img}/>
      <div className='hover_orange' />
    </ScrollDownWrapper>
    <AboutMeWrapper>
      <Introduction>
        <h1>Príbeh o slobode a samostatnosti</h1>
        <p>
        Ako sa z človeka stane online bodyguard? Hľadal som slobodu ako aj ty. Keď som ju našiel v tom, že robím čo ma baví, je výzvou si slobodu udržať.
        </p>
        <Monkey src={monkey} />
      </Introduction>
      <div className="text_blok">
      <h2>Galeje</h2>
      <p>
      Môj príbeh sa začína na <a href="https://www.galeje.sk/" rel="noopener noreferrer" target="_blank">Galejach</a>. Počítam príklady a drhnem lavice od
      8-16. Chcem si získať svoju slobodu a ušetriť rok života. Som preto
      dobrý študent a učím sa aj to čo ma nebaví. Čo si neuvedomujem je, že
      poctivé štádium mi dá užitočnú schopnosť. Všeobecný prehlaď.
      </p>
      </div>
      <img src={aboutme_1} alt="Galeje"/>

      <div className="text_blok">
      <h2>Volanie Dobrodružstva</h2>
      <p>
      Po maturite získavam slobodu na <a href="https://www.fm.uniba.sk/" rel="noopener noreferrer" target="_blank">Univerzite Komenského</a>. Študujem
ako si zmanažujem. V jeden všedný deň pri ceste autobusom na mňa z
ulice kričí stupídny billboard – “Čo kukáš jak dilino? Sprav to lepšie, keď
sa ti nepáči!” A veruže ja by som to fakt vedel spraviť lepšie. Keď sa
reklame nedá vyhnúť, pomôžem jej aspoň aby bola premyslenejšia.
      </p>
      </div>
      <img src={aboutme_2} alt="Galeje"/>

      <div className="text_blok">
      <h2>Kreatívny Sensei</h2>
      <p>
      Chcem byť schopný uživiť sa vlastnou hlavou a podnikať. Vstupujem do
sveta marketingu. Počas štúdii ma ovplyvnia predovšetkým 2 ľudia.
Prvým je spisovateľ <strong>Jozef Heriban</strong>, ktorý ma učí kreatívny marketing.
Druhého spoznávam neskôr v meste mojich snov.
      </p>
      </div>
      <img src={aboutme_3} alt="Galeje"/>

      <div className="text_blok">
      <h2>Neopúšťaj sa</h2>
      <p>
      Chcem popri štúdiu pracovať v marketingu. Ale všetky ponuky, na ktoré
nepožadujú skúsenosti, sú telefonický roboti a slizké MLM schémy.
Presne veci, proti ktorým sa snažím bojovať. Rozhodnem sa preto
radšej venovať vlastným nápadom a učiť sa experimentovaním.
      </p>
      </div>

      <div className="text_blok">
      <h2>Skús to s Vašom</h2>
      <p>
      Pohlcuje ma online svet. Svojou nízko-nákladovosťou mi umožňuje
experimentovať podľa fantázie. Vytváram zo srandy Facebook Gift
aplikáciu Patejdl, ktorá za rok dosiahne 10 500 užívateľov. Vašovi
vytváram aj <a href="https://www.facebook.com/vpatejdl/" rel="noopener noreferrer" target="_blank">fanpage</a>, na ktorej je dodnes viac fanúšikov ako na jeho
oficiálnej stránke.
      </p>
      </div>
      <img src={aboutme_4} alt="Galeje"/>

      <div className="text_blok">
      <h2>Freelance Sensei</h2>
      <p>
      Druhým človekom, ktorý ma počas mojich štúdií značne ovplyvní je
marketingový freelancer <strong>Albert Mallol</strong>. Na stáži v Barcelone ma ako
môj mentor zasvätí do tajov optimalizácie vyhľadávačov SEO. Pomáham
chrániť pozíciu agentúry <a href="http://1globaltranslators.com/" rel="noopener noreferrer" target="_blank">1 Global Translators</a> na prvých priečkach
vyhľadávania pre prekladateľské služby v rôznych jazykoch. 
      </p>
      </div>
      <img src={aboutme_5} alt="Galeje"/>

      <div className="text_blok">
      <h2>Dáš si Mafin?</h2>
      <p>
      Ďalšiu príležitosť vyskúšať si marketingové remeslo mi poskytuje
kamarátka z gymnázia <strong>Zuzka Kotíková</strong>. Pomáham jej rozšíriť povedomie
o amatérskom filmovom festivale MAFIN tvorbou šalených videí,
sociálnymi sieťami a WOM. Pri produkcii v Košiciach sa začína formovať
náš tvorivý WTF tím s <strong>Erikom Schwarzom</strong>. 
      </p>
      </div>
      <img src={aboutme_6} alt="Galeje"/>

      <div className="text_blok">
      <h2>Ozajstný Magor</h2>
      <p>
      Ako diplomovú prácu vytváram podnikateľský plán. Mám v úmysle
vrátiť sa do Košíc a založiť si alternatívnu reklamnú agentúru. Plán
obhájim pred dekanom <strong>Jozefom Papulom</strong>. Stávam sa oficiálnym
magorom z marketingu. 
      </p>
      </div>
      <img src={aboutme_7} alt="Galeje"/>

      <div className="text_blok">
      <h2>WTF Factory</h2>
      <p>
      Vybavený podnikateľským plánom zakladám WTF Factory s.r.o., so
špecializáciou na guerrilla marketing. Zbožňujem japonské WTF
reklamy. Získavam úplnú slobodu, ale musím budovať biznis od nuly.
Skúšam výstrel v tme - osloviť s nápadom môjho obľúbeného
slovenského komika <strong>Andera z Košíc</strong>.
      </p>
      </div>
      <img src={aboutme_8} alt="Galeje"/>

      <div className="text_blok">
      <h2>Pravý Anderground</h2>
      <p>
      Spolu s <strong>Viktorom Hvižďákom</strong> vytváram a organizujem stand-up comedy
show <a href="https://anderground.sk/" rel="noopener noreferrer" target="_blank">Anderground</a>, ktorá sa dožije 5 ročníkov. Bohužiaľ ten prvý pre
mňa ziskový nie je. Potrebujem vyriešiť financie. Legendárny ľudový
rozprávač, ale undergroundovou recesiou získa druhý dych a
v nasledujúcich rokoch zažíva nový vrchol popularity.
      </p>
      </div>
      <img src={aboutme_9} alt="Galeje"/>

      <div className="text_blok">
      <h2>Kríza 1</h2>
      <p>
      Mám holé nohy, preto robím ako foot model. Popri tom pôsobím ako
manažér sociálnych sietí, ideamaker a copywriter v agentúre <a href="https://adsulting.com/" rel="noopener noreferrer" target="_blank">Adsulting</a>.
Je to najefektívnejšie riešenie na stabilizáciu mojich financií. Robím na
brandoch ako Exisport, Cassovar, Kubbo Select a iných lokálnych
značkách. Problém je, že opäť šúcham lavicu, od 8 do 16.
      </p>
      </div>
      <img src={aboutme_10} alt="Galeje"/>

      <div className="text_blok">
      <h2>Späť na Ceste</h2>
      <p>
      Trpezlivou prácou vo voľnom čase sa mi postupne darí získať dostatok
klientov, na to aby som sa uživil. Končím s Adsultingom. Som sám sebe
pánom a robím pre klientov ako <a href="https://www.tabacka.sk/" rel="noopener noreferrer" target="_blank">Tabačka Kulturfabrik</a>, <a href="https://www.akarni.com/" rel="noopener noreferrer" target="_blank">Akarni.</a>
, <a href="http://69slam.sk/" rel="noopener noreferrer" target="_blank">69 SLAM</a>, <a href="https://www.ponchocompany.com/" rel="noopener noreferrer" target="_blank">Poncho Company</a>
, <a href="https://www.igenius.sk/" rel="noopener noreferrer" target="_blank">iGenius</a> a rôzne start-upy. Darí sa mi zamestnávať
rôznych freelancerov a časom aj 2 ľudí full-time. Začínam sa bližšie
zaujímať o virálny marketing. 
      </p>
      </div>
      <img src={aboutme_11} alt="Galeje"/>

      <div className="text_blok">
      <h2>Hodiny pre Prezidenta</h2>
      <p>
      S parťákom zo štúdií manažmentu <strong>Petrom Kováčom</strong> spoluvytváram
Hodiny pre prezidenta, virálny anti-darček. Spočíva v online
odpočítavaní do konca funkčného obdobia prezidenta Gašparoviča.
Webstránka získa počas 2 týždňov 25 000 unikátnych návštevníkov
a množstvo neplatenej mediálnej pozornosti. Nápad sa rozšíri aj do
Čiech, kde následne spustia vlastne <a href="http://www.zemancountdown.cz/" rel="noopener noreferrer" target="_blank">hodiny</a>.
      </p>
      </div>
      <img src={aboutme_12} alt="Galeje"/>

      <div className="text_blok">
      <h2>TEDxKošice</h2>
      <p>
      Som veľkým fanúšikom platformy TED, preto keď sa dozviem, že
potrebujú pomôcť s marketingom, neváham. Pomáham organizovať a
komunikovať 2 ročníky udalosti <a href="http://www.tedxkosice.com/" rel="noopener noreferrer" target="_blank">TEDxKosice</a>, ktoré naplnia kapacitu.
Vďaka TEDx spoznávam množstvo inšpiratívnych ľudí.
      </p>
      </div>
      <img src={aboutme_13} alt="Galeje"/>

      <div className="text_blok">
      <h2>Branding Sensei</h2>
      <p>
      Získavam stáž v <a href="http://www.zaraguza.com/" rel="noopener noreferrer" target="_blank">Zaraguze</a> po boku <strong>Michala Pastiera</strong>. Zisťujem aké to je
robiť v špičkovej slovenskej agentúre, sledujem proces tvorby brandov,
vylepšujem svoj copywriting a ideamaking. Krátkodobou prácou v top
agentúre si vyskúšam <a href="http://blog.yourdreamjob.sk/dusan-tatransky-na-stazi-u-michala-pastiera/" rel="noopener noreferrer" target="_blank">My Dream Job</a>, ale vraciam sa späť k samostatnej
tvorbe.
      </p>
      </div>
      <img src={aboutme_14} alt="Galeje"/>

      <div className="text_blok">
      <h2>Startup Fail</h2>
      <p>
      Mám nápad na vytvorenie globálnej siete fotografov. Pre dopyt po
fotkách na mieru. Zakladám vlastný start-up a spúšťam crowdfundingovú kampaň pre portál 
<a href="https://nonstock.photography/" rel="noopener noreferrer" target="_blank">Nonstock.Photography</a>. Kampani sa síce darí
rozšíriť povedomie o značke a získať nových fotografov, ale jednociferný
počet prispievateľov a klientov znamenajú fail. Bez investícií projekt
začína žiť svoj vlastný život a ja mu prestávam venovať pozornosť.
      </p>
      </div>
      <img src={aboutme_15} alt="Galeje"/>

      <div className="text_blok">
      <h2>Kríza 2</h2>
      <p>
      Po neúspechu startupu utŕžim ďalšiu ranu v podobe odchodu
najväčšieho klienta, Tabačky Kulturfabrik, ktorá ide do rekonštrukcie.
Nesiem zodpovednosť za 2 zamestnancov a preto skúšam zákazky
outsourcovať. Spúšťam direct mailingovú kampaň na fiktívnu reklamnú
súťaž Grand3x. Cesta ma opäť zavedie do Bratislavy. 
      </p>
      </div>

      <div className="text_blok">
      <h2>Keynote Sensei</h2>
      <p>
      Začínam pôsobiť ako dodávateľ pre etablovanú marketingovú agentúru <a href="https://www.a3boot.sk/" rel="noopener noreferrer" target="_blank">a3boot</a>. Pod vedením vyskillovanej <strong>Kristíny Tomkovej</strong> sa dostávam na
nový level tvorby prezentácií, ktoré predavajú. Robím na tendroch,
udalostiach, kampaniach, sociálnych sieťach a produkcii značiek ako
Absolut, Accenture, adidas, Heineken, Pilsner Urquell, PwC, Siemens a
iné.
      </p>
      </div>
      <img src={aboutme_16} alt="Galeje"/>

      <div className="text_blok">
      <h2>Zlatý Klinec</h2>
      <p>
      Vykonávam funkciu <strong>Senior Account Managera</strong>, ale tiež ideamaker,
copywriter, social media manager, influencer marketer, event manager
a produkčný. S agentúrou a3boot získavame shortlist na <a href="https://zlatyklinec.sk/sk" rel="noopener noreferrer" target="_blank">Zlatom Klinci</a>
2016. Víťazíme v podkategórii Event B2C s prácou na značke <a href="http://authorcloud.co/ABSOLUTNE-ELEKTRIZUJUCA-NOC-ddbf8f8tv" rel="noopener noreferrer" target="_blank">Absolut Electrik</a>. Spoznávam množstvo zaujímavých a šikovných ľudí. Stále ma
však trápi pracovný čas a rutina. 
      </p>
      </div>
      <img src={aboutme_17} alt="Galeje"/>

      <div className="text_blok">
      <h2>Online Evanjelium</h2>
      <p>
      Mám záujem prehĺbiť svoje kompetencie v online svete a získať viac
slobody. Pod patronátom slovenského digitálneho priekopníka <strong>Petra
Ridzoňa</strong> sa vraciam k špecializácii na online marketing. Ako Chief
Evangelist Officer pracujem na globálnom spustení iOS aplikácie pre
kreatívcov <a href="http://authorapp.co/" rel="noopener noreferrer" target="_blank">Author</a>. Experimentujem s rôznymi taktikami pre App Store,
Black Friday, <a href="https://a3boot.com/blogovanie-v%C3%A1s-m%C3%B4%C5%BEe-vy%C5%A1%C5%A5avi%C5%A5-nahra%C4%8Fte-ho-side-projectom-c2ac90a34976" rel="noopener noreferrer" target="_blank">Side Project</a> a s microinfluencermi
      </p>
      </div>
      <img src={aboutme_18} alt="Galeje"/>

      <div className="text_blok">
      <h2>Vľúdny Holanďan</h2>
      <p>
      Nové dobrodružstvo si ma nájde samo. Tentokrát v podobe kamaráta
menom <strong>Menno Wielhouwer</strong>. Presúvam sa do Utrechtu a pracujem pre
holandský start-up <a href="https://2daysmood.com/en/" rel="noopener noreferrer" target="_blank">2daysmood</a> ako Head of Marketing. Firma sa
špecializuje na šťastie zamestnancov. Nastavujem značku, komunikáciu
a marketingovú stratégiu pre globálne spustenie.
      </p>
      </div>
      <img src={aboutme_19} alt="Galeje"/>

      <div className="text_blok">
      <h2>Online Bodyguard</h2>
      <p>
      Po tom ako som robil pre všetky druhy značiek a moje marketingové
kompetencie rokmi rástli, som došiel k uvedomeniu. Vždy mi
vyhovovala cesta osamelého bojovníka. Hybnou silou v mojom príbehu
o ceste za slobodou, sú ale tvoriví ľudia, ktorých poznám. A mojou
tajnou zbraňou, je moja seba prezentácia. Osobná značka mi pomohla
pri každej zmene a som presvedčený, že pomôže aj tebe.
      </p>
      </div>

      <div className="text_blok">
      <h2>Tvoja Gorila</h2>
      <p>
      Rozhodol som sa brať to osobne a byť slobodný. Využívam svoje
brandingové skúsenosti a špecializujem sa na <strong>osobnú značku</strong> a
<strong>influencer marketing</strong>. Chcem namiesto firiem pomáhať priamo
umelcom, freelancerom a iným tvorivým ľuďom, ktorých uznávam a s
ktorými ma baví pracovať. Pomôžem ti aktualizovať tvoju značku a
preniesť tvoj príbeh do online sveta efektívnejšie.
      </p>
      </div>
      <img className="last" src={aboutme_21} alt="Galeje"/>

      

      <main>{children}</main>
    </AboutMeWrapper>
  </PageWrapper>   
)

LayoutAboutMe.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAboutMe