import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { Link } from "gatsby"
import { Controller, Scene } from "react-scrollmagic"

import Avatar from "./avatar"
import Burger from "./burger"
import FooterHome from "./footerHome"
import Footer from "./footer"
import ScrollDown from "./scrollDown"
import Story from "./story"

import dusanstvo_omne from "../images/dusanstvo_omne.jpg"
import dusanstvo_otebe from "../images/dusanstvo_otebe.jpg"
import dusanstvo_sluzby from "../images/dusanstvo_sluzby.jpg"

import aboutme_1 from "../images/aboutme_1.jpg"
import aboutme_2 from "../images/aboutme_2.jpg"
import aboutme_3 from "../images/aboutme_3.jpg"
import aboutme_4a from "../images/aboutme_4a.jpg"
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
import aboutme_16a from "../images/aboutme_16a.jpg"
import aboutme_16 from "../images/aboutme_16.jpg"
import aboutme_17 from "../images/aboutme_17.jpg"
import aboutme_18 from "../images/aboutme_18.jpg"
import aboutme_19 from "../images/aboutme_19.jpg"
import aboutme_20 from "../images/aboutme_20.jpg"
import aboutme_21 from "../images/aboutme_21.jpg"

const PageWrapper = styled.div`
  width: 100vw;
  overflow-x: hidden;
  background: var(--white);
  transition: 0.4s;
  &.change_color {
    background: var(--white);
  }
  .subpage {
    font-size: 29vw;
  }
  .hide_text {
    opacity: 0;
    z-index: -1;
  }
  .hide_social {
    opacity: 0;
  }
  .hide_scroll {
    opacity: 0;
  }
  .hide_burger {
    display: none;
  }
`
const BurgerWrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 30px;
  top: 0;
  right: 0;
  z-index: 99999;
`

const ImageWrapper = styled.div`
  width: 100%;
  margin: 100px 0;
`

const BlokLeft = styled.div`
  position: relative;
  width: 50%;
  padding: 100px 0;
  p {
    padding: 25px;
  }
  @media (max-width: 1000px) {
    width: 100%;
    padding: 0;
    p {
      padding: 25px 0 25px 0;
    }
  }
`

const TextWrapper = styled.div`
  width: 900px;
  margin: 0 auto;
  padding-bottom: 150px;
  position: relative;
  @media (max-width: 1000px) {
    max-width: 100%;
    padding: 0px 25px 150px 25px;
  }
`
const Trigger = styled.div`
  width: 100%;
  height: 1px;
  position: relative;
  display: block;
`

const LayoutAboutMe = ({ children }) => (
  <Controller>
    <Scene classToggle="change_color" triggerElement="#trigger_orange">
      <PageWrapper>
        <BurgerWrapper>
          <Controller>
            <Scene
              classToggle="hide_burger"
              triggerElement="#trigger_hide_burger"
            >
              <div>
                <Burger burder_color="burger_white" aboutMe="active" />
              </div>
            </Scene>
          </Controller>
        </BurgerWrapper>
        <Link to="/">
          <Avatar />
        </Link>
        <Controller>
          <Scene classToggle="hide_text" triggerElement="#trigger_hide_text">
            <h1 className="subpage">STORY</h1>
          </Scene>
        </Controller>
        <Controller globalSceneOptions={{ triggerHook: "onEnter" }}>
          <Scene
            classToggle="hide_social"
            triggerElement="#trigger_hide_social"
          >
            <div>
              <FooterHome />
            </div>
          </Scene>
        </Controller>
        <Controller globalSceneOptions={{ triggerHook: "onEnter" }}>
          <Scene
            classToggle="hide_scroll"
            triggerElement="#trigger_hide_social"
          >
            <div>
              <ScrollDown />
            </div>
          </Scene>
        </Controller>
        <TextWrapper>
          <h2>
            Som Dušan Tatranský a ty nie. Toto je môj príbeh o slobode a
            nezávislosti.
          </h2>
          <ImageWrapper>
            <img src={dusanstvo_omne} alt="" />
          </ImageWrapper>
          <BlokLeft>
            <p id="trigger_hide_text">
              Od roku 2008 ma baví a od roku 2011 ma živí marketing. Chcem aby
              sa viac ľudí dokázalo uživiť tým, čo ich baví. Preto som si
              vytvoril vlastnú pracovnú pozíciu.
            </p>
          </BlokLeft>
          <Story
            margin_top="0px"
            trigger="#trigger_hide_text"
            triggering_class="trigger_about_2"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_1}
            h4_top="0px"
            h4_left="400px"
            year="1998"
            h3_top="100px"
            h3_left="150px"
            headline="Galeje"
            p_width="350px"
            text={[
              "Môj príbeh sa začína na ",
              <a
                href="https://www.galeje.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Galejach
              </a>,
              ". Počítam príklady a drhnem lavice od 8-16. Chcem si získať svoju slobodu a ušetriť na osemročnom gymnáziu rok života. Som preto dobrý študent a učím sa aj to čo ma nebaví. Čo si neuvedomujem je, že poctivé štádium mi dá užitočnú vlastnosť. Všeobecný prehlaď.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_2"
            triggering_class="dont_trigger"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_2}
            h4_top="100px"
            h4_left="300px"
            year="2006"
            h3_top="100px"
            h3_left="450px"
            headline="Volanie Dobrodružstva"
            p_width="350px"
            text={[
              "Po maturite získavam viac slobody na ",
              <a
                href="https://www.fm.uniba.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Univerzite Komenského
              </a>,
              " v Bratislave. Štúdium si manažujem po svojom. V jeden všedný deň pri ceste autobusom na mňa z ulice kričí stupídny billboard – “Čo kukáš jak dilino? Sprav to lepšie, keď sa ti nepáči!” A od vtedy sa to snažím robiť lepšie, pretože reklame sa nedá vyhnúť.",
            ]}
          />
          <Story
            margin_top="0px"
            trigger="#trigger_about_3"
            triggering_class="dont_trigger"
            triggering_class_secondary="trigger_about_3"
            triggering_class_image="trigger_about_4"
            right="auto"
            top="470"
            left="0"
            bottom="auto"
            width="100%"
            height="300px"
            bg_pos="center bottom"
            image={aboutme_3}
            h4_top="100px"
            h4_left="100px"
            year="2008"
            h3_top="50px"
            h3_left="100px"
            headline="Kreatívny Sensei"
            p_width="700px"
            text={[
              "Chcem byť schopný uživiť sa vlastnou hlavou a podnikať. Vstupujem tak do sveta marketingu. Počas štúdií ma ovplyvnia predovšetkým 2 ľudia. Prvým je spisovateľ Jozef Heriban, ktorý ma učí kreatívny marketing. Druhého spoznávam neskôr v meste mojich snov.",
            ]}
          />
          <Story
            margin_top="500px"
            trigger="#trigger_about_4"
            triggering_class="trigger_about_5"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_4a}
            h4_top="0px"
            h4_left="400px"
            year="2008"
            h3_top="100px"
            h3_left="150px"
            headline="Neopúšťaj sa"
            p_width="350px"
            text={[
              "Popri štúdiu chcem v marketingu aj pracovať. Ale všetky ponuky, na ktoré nepožadujú skúsenosti, sú otravní telefonisti a slizké MLM schémy. Presne tie veci, proti ktorým sa snažím bojovať. Rozhodnem sa preto radšej venovať vlastným nápadom a učiť sa experimentovaním.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_5"
            triggering_class="trigger_about_6"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_4}
            h4_top="100px"
            h4_left="300px"
            year="2008"
            h3_top="100px"
            h3_left="450px"
            headline="Skús to s Vašom"
            p_width="350px"
            text={[
              "Pohlcuje ma online svet. Svojou nízko-nákladovosťou mi umožňuje experimentovať podľa fantázie. Vytváram zo srandy Facebook Gift aplikáciu Patejdl, ktorá za rok dosiahne 10 500 užívateľov. Vašovi vytváram aj ",
              <a
                href="https://www.facebook.com/vpatejdl/"
                target="_blank"
                rel="noopener noreferrer"
              >
                fanpage
              </a>,
              ", na ktorej je dodnes viac fanúšikov ako na jeho oficiálnej stránke.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_6"
            triggering_class="trigger_about_7"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_6}
            h4_top="0px"
            h4_left="400px"
            year="2010"
            h3_top="100px"
            h3_left="150px"
            headline="Dáš si Mafin?"
            p_width="350px"
            text={[
              "Ďalšiu príležitosť vyskúšať si marketingové remeslo mi poskytuje kamarátka z gymnázia Zuzka Kotíková. Pomáham jej rozšíriť povedomie o amatérskom filmovom festivale MAFIN tvorbou šalených ",
              <a
                href="https://vimeo.com/14635095"
                target="_blank"
                rel="noopener noreferrer"
              >
                videí
              </a>,
              ", sociálnymi sieťami a WOM. Pri produkcii v Košiciach sa začína formovať náš tvorivý WTF tím s Erikom Schwarzom.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_7"
            triggering_class="trigger_about_8"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_5}
            h4_top="100px"
            h4_left="300px"
            year="2011"
            h3_top="100px"
            h3_left="450px"
            headline="Freelance Sensei"
            p_width="350px"
            text={[
              "Druhým človekom, ktorý ma počas mojich štúdií značne ovplyvní je marketingový freelancer Albert Mallol. Na stáži v Barcelone ma ako môj mentor zasvätí do tajov optimalizácie vyhľadávačov SEO. Pomáham chrániť pozíciu agentúry ",
              <a
                href="http://1globaltranslators.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                1 Global Translators
              </a>,
              " na prvých priečkach vyhľadávania pre prekladateľské služby v rôznych jazykoch.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_8"
            triggering_class="dont_trigger"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            bg_pos="-300px center"
            bg_narrow_pos="center top"
            image={aboutme_7}
            h4_top="0px"
            h4_left="400px"
            year="2011"
            h3_top="100px"
            h3_left="150px"
            headline="Ozajstný Magor"
            p_width="350px"
            text={[
              "Ako diplomovú prácu vytváram podnikateľský plán. Mám v úmysle vrátiť sa do Košíc a založiť si alternatívnu reklamnú agentúru. Plán obhájim pred dekanom Jozefom Papulom. Stávam sa oficiálnym magistrom z marketingu.",
            ]}
          />
          <Story
            margin_top="0px"
            trigger="#trigger_about_9"
            triggering_class="dont_trigger"
            triggering_class_secondary="trigger_about_9"
            triggering_class_image="trigger_about_10"
            right="auto"
            top="470"
            left="0"
            bottom="auto"
            width="100%"
            height="300px"
            image={aboutme_8}
            h4_top="100px"
            h4_left="100px"
            year="2011"
            h3_top="50px"
            h3_left="100px"
            headline="WTF Factory"
            p_width="700px"
            text={[
              "Vybavený podnikateľským plánom zakladám WTF Factory s.r.o., so špecializáciou na guerrilla marketing. Zbožňujem japonské WTF reklamy. Získavam úplnú slobodu, ale musím budovať biznis od nuly. Skúšam výstrel v tme - osloviť s nápadom môjho obľúbeného slovenského komika Andera z Košíc.",
            ]}
          />
          <Story
            margin_top="500px"
            trigger="#trigger_about_10"
            triggering_class="trigger_about_11"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_9}
            h4_top="100px"
            h4_left="300px"
            year="2011"
            h3_top="100px"
            h3_left="450px"
            headline="Pravý Anderground"
            p_width="350px"
            text={[
              "Spolu s Viktorom Hvižďákom vytváram a organizujem stand-up comedy show ",
              <a
                href="https://anderground.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anderground
              </a>,
              ", ktorá sa dožije 5 ročníkov. Bohužiaľ ten prvý pre mňa ziskový nie je. Potrebujem vyriešiť financie. Legendárny ľudový rozprávač však undergroundovou recesiou získa druhý dych a v nasledujúcich rokoch zažíva nový vrchol popularity.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_11"
            triggering_class="trigger_about_12"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_10}
            h4_top="0px"
            h4_left="400px"
            year="2012"
            h3_top="100px"
            h3_left="150px"
            headline="Kríza 1"
            p_width="350px"
            text={[
              "Mám holé nohy, preto robím ako foot model. Popri tom pôsobím ako manažér sociálnych sietí, ideamaker a copywriter v agentúre ",
              <a
                href="https://adsulting.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Adsulting
              </a>,
              ". Je to najefektívnejšie riešenie na stabilizáciu mojich financií. Robím na brandoch ako Exisport, Cassovar, Kubbo Select a iných lokálnych značkách. Problém je, že opäť šúcham lavicu, od 8 do 16.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_12"
            triggering_class="trigger_about_13"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_11}
            h4_top="100px"
            h4_left="300px"
            year="2012"
            h3_top="100px"
            h3_left="450px"
            headline="Späť na Ceste"
            p_width="350px"
            text={[
              "Trpezlivou prácou vo voľnom čase sa mi postupne darí získať dostatok klientov, na to aby som sa uživil. Končím s Adsultingom. Som sám sebe pánom a robím pre klientov ako ",
              <a
                href="https://www.tabacka.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tabačka Kulturfabrik
              </a>,
              ", ",
              <a
                href="https://www.akarni.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Akarni
              </a>,
              ", ",
              <a
                href="http://69slam.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                69 SLAM
              </a>,
              ", ",
              <a
                href="https://www.ponchocompany.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Poncho Company
              </a>,
              ", ",
              <a
                href="https://www.igenius.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                iGenius
              </a>,
              " a rôzne start-upy. Darí sa mi zamestnávať rôznych freelancerov a časom aj 2 ľudí full-time. Začínam sa bližšie zaujímať o virálny marketing.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_13"
            triggering_class="dont_trigger"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            bg_pos="-350px center"
            bg_narrow_pos="center top"
            image={aboutme_12}
            h4_top="0px"
            h4_left="400px"
            year="2013"
            h3_top="100px"
            h3_left="150px"
            headline="Hodiny pre Prezidenta"
            p_width="350px"
            text={[
              "S parťákom zo štúdií manažmentu Petrom Kováčom spoluvytváram Hodiny pre prezidenta - virálny anti-darček. Spočíva v online odpočítavaní do konca funkčného obdobia prezidenta Gašparoviča. Webstránka získa počas 2 týždňov 25 000 unikátnych návštevníkov a množstvo neplatenej mediálnej pozornosti. Nápad sa rozšíri aj do Čiech, kde následne spustia vlastné ",
              <a
                href="http://www.zemancountdown.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                hodiny
              </a>,
              ".",
            ]}
          />
          <Story
            margin_top="0px"
            trigger="#trigger_about_14"
            triggering_class="dont_trigger"
            triggering_class_secondary="trigger_about_14"
            triggering_class_image="trigger_about_15"
            right="auto"
            top="470"
            left="0"
            bottom="auto"
            width="100%"
            height="300px"
            image={aboutme_13}
            h4_top="100px"
            h4_left="100px"
            year="2013"
            h3_top="50px"
            h3_left="100px"
            headline="TEDxKošice"
            p_width="700px"
            text={[
              "Som veľkým fanúšikom platformy TED, preto keď sa dozviem, že potrebujú pomôcť s marketingom, neváham. Pomáham organizovať a komunikovať 2 ročníky udalosti ",
              <a
                href="http://tedxkosice.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TEDxKosice
              </a>,
              ", ktoré naplnia kapacitu. Vďaka TEDx spoznávam množstvo inšpiratívnych ľudí.",
            ]}
          />
          <Story
            margin_top="500px"
            trigger="#trigger_about_15"
            triggering_class="trigger_about_16"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            bg_narrow_pos="center top"
            image={aboutme_14}
            h4_top="0px"
            h4_left="400px"
            year="2013"
            h3_top="100px"
            h3_left="150px"
            headline="Branding Sensei"
            p_width="350px"
            text={[
              "Získavam stáž v ",
              <a
                href="http://www.zaraguza.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zaraguze
              </a>,
              " po boku Michala Pastiera. Zisťujem aké to je robiť v špičkovej slovenskej agentúre, sledujem proces tvorby brandov, vylepšujem svoj copywriting a ideamaking. Krátkodobou prácou v top agentúre si vyskúšam ",
              <a
                href="http://blog.yourdreamjob.sk/dusan-tatransky-na-stazi-u-michala-pastiera/"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Dream Job
              </a>,
              ", ale vraciam sa späť k samostatnej tvorbe.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_16"
            triggering_class="trigger_about_17"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_15}
            h4_top="100px"
            h4_left="300px"
            year="2014"
            h3_top="100px"
            h3_left="450px"
            headline="Startup Fail"
            p_width="350px"
            text={[
              "Mám nápad na vytvorenie globálnej siete fotografov. Pre dopyt po fotkách na mieru. Zakladám vlastný start-up a spúšťam crowdfunding-ovú kampaň pre portál ",
              <a
                href="https://nonstock.photography/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nonstock.Photography
              </a>,
              ". Kampani sa síce darí rozšíriť povedomie o značke a získať nových fotografov, ale dopyt po službách nie je taký ako som očakával. Bez investícií projekt začína žiť svoj vlastný život a ja mu prestávam venovať pozornosť.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_17"
            triggering_class="dont_trigger"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            bg_narrow_pos="center top"
            image={aboutme_16a}
            h4_top="0px"
            h4_left="400px"
            year="2014"
            h3_top="100px"
            h3_left="150px"
            headline="Kríza 2"
            p_width="350px"
            text={[
              "Po neúspechu startupu utŕžim ďalšiu ranu v podobe odchodu najväčšieho klienta, Tabačky Kulturfabrik, ktorá ide do rekonštrukcie. Nesiem zodpovednosť za 2 zamestnancov a preto skúšam zákazky outsourcovať. Spúšťam direct mailingovú kampaň na fiktívnu reklamnú súťaž Grand3x. Cesta ma opäť vedie do Bratislavy.",
            ]}
          />
          <Trigger id="trigger_orange" />
          <Story
            margin_top="0px"
            trigger="#trigger_about_18"
            triggering_class="dont_trigger"
            triggering_class_secondary="trigger_about_18"
            triggering_class_image="trigger_about_19"
            right="auto"
            top="470"
            left="0"
            bottom="auto"
            width="100%"
            height="300px"
            image={aboutme_16}
            h4_top="100px"
            h4_left="100px"
            year="2015"
            h3_top="50px"
            h3_left="100px"
            headline="Keynote Sensei"
            p_width="700px"
            text={[
              "Začínam pôsobiť ako dodávateľ pre etablovanú marketingovú agentúru ",
              <a
                href="https://www.a3boot.sk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                a3boot
              </a>,
              ". Pod vedením vyskillovanej Kristíny Tomkovej sa dostávam na nový level tvorby prezentácií, ktoré predavajú. Robím na tendroch, udalostiach, kampaniach, sociálnych sieťach a produkcii značiek ako Absolut, Accenture, adidas, Heineken, Pilsner Urquell, PwC, Siemens a iné.",
            ]}
          />
          <Story
            margin_top="500px"
            trigger="#trigger_about_19"
            triggering_class="trigger_about_20"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_17}
            h4_top="100px"
            h4_left="300px"
            year="2016"
            h3_top="100px"
            h3_left="450px"
            headline="Zlatý Klinec"
            p_width="350px"
            text={[
              "Vykonávam funkciu Senior Account Managera, ale tiež  ideamaker, copywriter, social media manager, influencer marketer, event manager a produkčný. S agentúrou a3boot získavame shortlist na ",
              <a
                href="https://zlatyklinec.sk/sk"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zlatom Klinci
              </a>,
              " 2016 vďaka práci na značke ",
              <a
                href="http://authorcloud.co/ABSOLUTNE-ELEKTRIZUJUCA-NOC-ddbf8f8tv"
                target="_blank"
                rel="noopener noreferrer"
              >
                Absolut Electrik
              </a>,
              ". Spoznávam množstvo zaujímavých a šikovných ľudí. Stále ma však trápi pracovný čas a rutina. ",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_20"
            triggering_class="dont_trigger"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            bg_pos="-100px center"
            image={aboutme_18}
            h4_top="0px"
            h4_left="400px"
            year="2016"
            h3_top="100px"
            h3_left="150px"
            headline="Online Evanjelium "
            p_width="350px"
            text={[
              "Mám záujem získať viac slobody prehĺbením svojich kompetencií v online svete. Pod patronátom slovenského digitálneho priekopníka Petra Ridzoňa sa vraciam k špecializácii na online marketing. Ako Chief Evangelist Officer pracujem na globálnom spustení iOS aplikácie pre kreatívcov ",
              <a
                href="http://authorapp.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Author
              </a>,
              ". Experimentujem s rôznymi taktikami pre App Store, Black Friday, ",
              <a
                href="https://a3boot.com/blogovanie-v%C3%A1s-m%C3%B4%C5%BEe-vy%C5%A1%C5%A5avi%C5%A5-nahra%C4%8Fte-ho-side-projectom-c2ac90a34976"
                target="_blank"
                rel="noopener noreferrer"
              >
                Side Project
              </a>,
              " a s microinfluencermi.",
            ]}
          />
          <Story
            margin_top="0px"
            trigger="#trigger_about_21"
            triggering_class="dont_trigger"
            triggering_class_secondary="trigger_about_21"
            triggering_class_image="trigger_about_22"
            right="auto"
            top="470"
            left="0"
            bottom="auto"
            width="100%"
            height="300px"
            bg_pos="center -30px"
            image={aboutme_19}
            h4_top="100px"
            h4_left="100px"
            year="2017"
            h3_top="50px"
            h3_left="100px"
            headline="Vľúdny Holanďan"
            p_width="700px"
            text={[
              "Nové dobrodružstvo si ma nájde samo. Tentokrát v podobe kamaráta menom Menno Wielhouwer. Presúvam sa do Utrechtu a pracujem pre holandský start-up ",
              <a
                href="https://2daysmood.com/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                2daysmood
              </a>,
              " ako Head of Marketing. Nastavujem značku, komunikáciu a marketingovú stratégiu pre globálne spustenie. Firma sa špecializuje na šťastie zamestnancov a s jej pomocou dochádzam po roku a pol k uvedomeniu.",
            ]}
          />
          <Story
            margin_top="500px"
            trigger="#trigger_about_22"
            triggering_class="trigger_about_23"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="-50px"
            top="0"
            left="auto"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_20}
            h4_top="0px"
            h4_left="400px"
            year="2018"
            h3_top="100px"
            h3_left="150px"
            headline="Online Bodyguard"
            p_width="350px"
            text={[
              "Dopracujem sa k tomu, že na to aby som mohol využívať svoje silné stránky, a robiť čo ma baví zo všetkého najviac, si musím vytvoriť vlastnú pracovnú pozíciu. Začínam sa špecializovať na osobnú značku, ktorá ma ochránila pri každej kariérnej zmene. Online identita a reputácia je jednou z mála vecí, ktoré môžem mať ako freelancer v podnikaní pod kontrolou.",
            ]}
          />
          <Story
            margin_top="100px"
            trigger="#trigger_about_23"
            triggering_class="dont_trigger"
            triggering_class_secondary="dont_trigger"
            triggering_class_image="dont_trigger"
            right="auto"
            top="0"
            left="-50px"
            bottom="auto"
            width="390px"
            height="590px"
            image={aboutme_21}
            h4_top="100px"
            h4_left="300px"
            year="2019"
            h3_top="100px"
            h3_left="450px"
            headline="Tvoja Gorila"
            p_width="350px"
            text={[
              "Mám konečne plnú slobodu. Robím s ľuďmi, s ktorými ma baví robiť. Robím kedy ma to baví, či už v noci alebo cez deň. Robím tak ako verím, že je to správne, a robím to čo verím, že je správne a potrebné. Plne podľa vlastných predstáv a presvedčenia. A moji klienti, nakoľko sú tiež freelanceri to rešpektujú.",
            ]}
          />
        </TextWrapper>
        <Trigger id="trigger_hide_social" />
        <Footer
          link_1="Napíš mi o sebe"
          url_1="/oTebe"
          image_1={dusanstvo_otebe}
          link_2="S čím ti viem pomôcť"
          url_2="/sluzby"
          image_2={dusanstvo_sluzby}
        />
      </PageWrapper>
    </Scene>
  </Controller>
)

LayoutAboutMe.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutAboutMe
