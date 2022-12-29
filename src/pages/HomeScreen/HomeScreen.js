import "./HomeScreen.scss";
import React from "react";
import LandingBanner from "../../assets/rekt_landing.svg";
import RoadmapTitle from "../../assets/roadmap_title.svg";
import AboutTitle from "../../assets/about_title.svg";
import TeamTitle from "../../assets/team_title.svg";
import Smile from "../../assets/smile_img.svg";
import Cap from "../../assets/cap.svg";
import Rekt from "../../assets/rekt.svg";
import Memes from "../../assets/memes.svg";
import MoreMemes from "../../assets/morememes.svg";
import EvenMoreMemes from "../../assets/evenmorememes.svg";
import Twitter from "../../assets/twitter.svg";
import Lazypoet from "../../assets/lazypoet.svg";
import Abbasali from "../../assets/abbasali.svg";
import Bunsenburner from "../../assets/bunsenburner.svg";
import Dheeraj from "../../assets/dheeraj.svg";
import Gaurang from "../../assets/gaurang.svg";
import Groovyman from "../../assets/groovyman.svg";
import Harshith from "../../assets/harshith.svg";
import Nftindian from "../../assets/nftindian.svg";


export default function HomeScreen() {
  return (
    <article className="homescreen">
      <section className="homescreen_landingsection">
        <img
          className="homescreen_landingsection_landingimg"
          src={LandingBanner}
          alt="welcome to rekt"
        />
      </section>
      <section className="homescreen_aboutsection">
        <div className="homescreen_aboutsection_title">
          {" "}
          <img
            className="homescreen_aboutsection_title_img"
            src={AboutTitle}
            alt="Roadmap"
          />
          <img
            src={Cap}
            className="homescreen_aboutsection_title_img_relative"
            alt="Cap"
          />
        </div>
        <div className="homescreen_aboutsection_subtitle">
          Rekt.build, the ultimate way to commemorate the crypto community
          getting REKT in 2022. Our NFTs are completely free, and they have
          multiple traits based on how REKT your crypto wallet was in 2022. For
          example, if you lost a lot of money in shitcoins, you might get a
          McDonald's hat NFT. If you paid a lot in gas fees, you might get a gas
          station background NFT. These NFTs are a fun way to show off just how
          REKT you got in 2022, and they're a great way to bring a bit of levity
          to the wild ride that was the year.
        </div>
        <div className="homescreen_aboutsection_subtitle">
          Our goal with Rekt.build is to create a completely mematic community
          that got REKT in 2022. We're not making any false promises or trying
          to hype up something that doesn't exist. In fact, we don't even have a
          Discord server or a roadmap. We're just a group of DeGens looking to
          have a good time and poke fun at the ups and downs of the crypto space
          in 2022.
        </div>
        <div className="homescreen_aboutsection_subtitle">
          So don't take us too seriously and come join the Rekt.build party.
          Just don't expect any grand plans or visions for the future, we're
          just here to have a good time. And if you do decide to mint a
          Rekt.build NFT, don't expect it to make you rich. In fact, don't
          expect it to do anything at all except maybe make you smile and remind
          you of the REKTness of 2022. Thanks for supporting Rekt.build, and
          let's end the year on a lighthearted note. Who knows, maybe we'll
          actually come up with a plan for 2023...but probably not.
        </div>
        <div className="homescreen_aboutsection_element">
          <img
            src={Rekt}
            alt="rekt"
            className="homescreen_aboutsection_element_img"
          />
        </div>
      </section>
      <section className="homescreen_roadmapsection">
        <div className="homescreen_roadmapsection_title">
          <img
            className="homescreen_roadmapsection_title_img"
            src={RoadmapTitle}
            alt="Roadmap"
          />
        </div>
        <div className="homescreen_roadmapsection_subtitle1">
          <img
            className="homescreen_roadmapsection_subtitle1_img"
            src={Memes}
            alt="Memes"
          />
        </div>
        <div className="homescreen_roadmapsection_subtitle2">
          <img
            className="homescreen_roadmapsection_subtitle2_img"
            src={MoreMemes}
            alt="More Memes"
          />
        </div>
        <div className="homescreen_roadmapsection_subtitle3">
          <img
            className="homescreen_roadmapsection_subtitle3_img"
            src={EvenMoreMemes}
            alt="Even More Memes"
          />
        </div>
        <div className="homescreen_roadmapsection_subtitle4">
          <img
            className="homescreen_roadmapsection_subtitle4_img"
            src={Smile}
            alt="Even More Memes"
          />
        </div>
      </section>
      <section className="homescreen_teamsection">
        <div className="homescreen_teamsection_title">
          <img
            src={Cap}
            className="homescreen_teamsection_title_img_relative"
            alt="Cap"
          />
          <img
            className="homescreen_teamsection_title_img"
            src={TeamTitle}
            alt="Roadmap"
          />
        </div>
        <div className="homescreen_teamsection_cards">
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Lazypoet}
                alt="lazypoet"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Lazypoet.eth
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/_lazypoet_">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>
          </div>
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Harshith}
                alt="harshith"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Harshith.eth
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/harshith_eth">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>{" "}
          </div>
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Bunsenburner}
                alt="bunsenburner"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Bunsenburner.eth
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/yashsurya1105">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>{" "}
          </div>
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Nftindian}
                alt="nftindian"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Rishabhkeshan.eth
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/keshanrishabh">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>{" "}
          </div>
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Dheeraj}
                alt="Dheeraj"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Dheeraj
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/dsborde">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>{" "}
          </div>
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Gaurang}
                alt="gaurang"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Gaurang.eth
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/iamgaurangdesai">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>{" "}
          </div>
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Groovyman}
                alt="groovyman"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Thegroovyman.eth
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/Thegroovymann">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>{" "}
          </div>
          <div className="homescreen_teamsection_cards_card">
            <div className="homescreen_teamsection_cards_card_pfp">
              <img
                src={Abbasali}
                alt="Abbasali"
                className="homescreen_teamsection_cards_card_pfp_img"
              />
            </div>
            <div className="homescreen_teamsection_cards_card_name">
              Abbasali.eth
            </div>
            <div className="homescreen_teamsection_cards_card_social">
              <a rel="noopener noreferrer" target="_blank"href="https://twitter.com/0xGizmo">
                <img src={Twitter} alt="twitter" />
              </a>
            </div>{" "}
          </div>
        </div>
      </section>
    </article>
  );
}
