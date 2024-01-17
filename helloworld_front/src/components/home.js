import Asexual from './../data/Flags/Asexual.png';
import Bisexual from './../data/Flags/Bisexual.png';
import Demisexual from './../data/Flags/Demisexual.png';
import Gay from './../data/Flags/Gay.png';
import Lesbian from './../data/Flags/Lesbian.png';
import Omnisexual from './../data/Flags/Omnisexual.jpg';
import Pansexual from './../data/Flags/Pansexual.png';
import Straight from './../data/Flags/Straight.png';

import BabyDaisy from './../data/Icons/Baby Daisy.webp';
import BabyLuigi from './../data/Icons/Baby Luigi.webp';
import BabyMario from './../data/Icons/Baby Mario.webp';
import BabyPeach from './../data/Icons/Baby Peach.webp';
import BabyRosalina from './../data/Icons/Baby Rosalina.webp';
import Birdo from './../data/Icons/Birdo.webp';
import BowserJR from './../data/Icons/Bowser JR.webp';
import Bowser from './../data/Icons/Bowser.webp';
import CatPeach from './../data/Icons/Cat Peach.webp';
import Daisy from './../data/Icons/Daisy.webp';
import DiddyKong from './../data/Icons/Diddy Kong.webp';
import DonkeyKong from './../data/Icons/Donkey Kong.webp';
import DryBones from './../data/Icons/Dry Bones.webp';
import DryBowser from './../data/Icons/Dry Bowser.webp';
import FunkyKong from './../data/Icons/Funky Kong.webp';
import Iggy from './../data/Icons/Iggy.webp';
import Inkling from './../data/Icons/Inkling Girl.webp';
import Isabelle from './../data/Icons/Isabelle.webp';
import Kamek from './../data/Icons/Kamek.png';
import KingBoo from './../data/Icons/King Boo.webp';
import KoopaTroopa from './../data/Icons/Koopa Troopa.webp';
import Lakitu from './../data/Icons/Lakitu.webp';
import Larry from './../data/Icons/Larry.webp';
import Lemmy from './../data/Icons/Lemmy.webp';
import Link from './../data/Icons/Link.webp';
import Ludwig from './../data/Icons/Ludwig.webp';
import Luigi from './../data/Icons/Luigi.webp';
import Mario from './../data/Icons/Mario.webp';
import MetalMario from './../data/Icons/Metal Mario.webp';
import Mii from './../data/Icons/Mii.webp';
import Morton from './../data/Icons/Morton.webp';
import Pauline from './../data/Icons/Pauline.webp';
import Peachette from './../data/Icons/Peachette.webp';
import PeteyPiranha from './../data/Icons/Petey Piranha.webp';
import PinkGoldPeach from './../data/Icons/Pink Gold Peach.webp';
import PrincessPeach from './../data/Icons/Princess Peach.webp';
import Rosalina from './../data/Icons/Rosalina.webp';
import Roy from './../data/Icons/Roy.webp';
import ShyGuy from './../data/Icons/Shy Guy.webp';
import TanookiMario from './../data/Icons/Tanooki Mario.webp';
import Toad from './../data/Icons/Toad.webp';
import Toadette from './../data/Icons/Toadette.webp';
import Villager from './../data/Icons/Villager Male.webp';
import Waluigi from './../data/Icons/Waluigi.webp';
import Wario from './../data/Icons/Wario.webp';
import Wendy from './../data/Icons/Wendy.webp';
import Wiggler from './../data/Icons/Wiggler.webp';
import Yoshi from './../data/Icons/Yoshi.webp';

import axios from "axios";
import { useState, useEffect } from "react";
import './../css/home.css';

function Home() {
    return (
        <div className='HomeMenu'>
            <div className='HomeTitle'>
                <h1>Woah! Big cool title or something</h1>
            </div>
            <div className='selectionMenu'>
                <div className="AttractionContainer">
                    <div className='AttractionRow'>
                        <div className="AttracionEntry">
                            <img src={Asexual} alt='Asexual'></img>
                            <h3>Asexual</h3>
                        </div>
                        <div className="AttracionEntry">
                            <img src={Bisexual} alt='Bisexual'></img>
                            <h3>Bisexual</h3>
                        </div>
                    </div>
                    <div className='AttractionRow'>
                        <div className="AttracionEntry">
                            <img src={Demisexual} alt='Demisexual'></img>
                            <h3>Demisexual</h3>
                        </div>
                        <div className="AttracionEntry">
                            <img src={Gay} alt='Gay'></img>
                            <h3>Gay</h3>
                        </div>
                    </div>
                    <div className='AttractionRow'>
                    <div className="AttracionEntry">
                            <img src={Pansexual} alt='Pansexual'></img>
                            <h3>Pansexual</h3>
                        </div>
                        <div className="AttracionEntry">
                            <img src={Lesbian} alt='Lesbian'></img>
                            <h3>Lesbian</h3>
                        </div>
                    </div>
                    <div className='AttractionRow'>
                        <div className="AttracionEntry">
                            <img src={Omnisexual} alt='Omnisexual'></img>
                            <h3>Omnisexual</h3>
                        </div>
                        <div className="AttracionEntry">
                            <img src={Straight} alt='Straight'></img>
                            <h3>Straight</h3>
                        </div>
                    </div>
                </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <div className='CharacterContainer'>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Mario} alt='Mario'></img>
                            <h3>Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Luigi} alt='Luigi'></img>
                            <h3>Luigi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={PrincessPeach} alt='Peach'></img>
                            <h3>Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Daisy} alt='Daisy'></img>
                            <h3>Daisy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Rosalina} alt='Rosalina'></img>
                            <h3>Rosalina</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={TanookiMario} alt='Tanooki Mario'></img>
                            <h3>Tanooki Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={CatPeach} alt='Cat Peach'></img>
                            <h3>Cat Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Birdo} alt='Birdo'></img>
                            <h3>Birdo</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Yoshi} alt='Yoshi'></img>
                            <h3>Yoshi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Toad} alt='Toad'></img>
                            <h3>Toad</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={KoopaTroopa} alt='Koopa'></img>
                            <h3>Koopa</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={ShyGuy} alt='Shy Guy'></img>
                            <h3>Shy Guy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Lakitu} alt='Lakitu'></img>
                            <h3>Lakitu</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Toadette} alt='Toadette'></img>
                            <h3>Toadette</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={KingBoo} alt='King Boo'></img>
                            <h3>King Boo</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={PeteyPiranha} alt='Petey Piranha'></img>
                            <h3>Petey Piranha</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={BabyMario} alt='Baby Mario'></img>
                            <h3>Baby Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyLuigi} alt='Baby Luigi'></img>
                            <h3>Baby Luigi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyPeach} alt='Baby Peach'></img>
                            <h3>Baby Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyDaisy} alt='Baby Daisy'></img>
                            <h3>Baby Daisy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyRosalina} alt='Baby Rosalina'></img>
                            <h3>Baby Rosalina</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={MetalMario} alt='Metal Mario'></img>
                            <h3>Metal Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={PinkGoldPeach} alt='Pink Gold Peach'></img>
                            <h3>Pink Gold Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Wiggler} alt='Wiggler'></img>
                            <h3>Wiggler</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Wario} alt='Wario'></img>
                            <h3>Wario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Waluigi} alt='Waluigi'></img>
                            <h3>Waluigi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DonkeyKong} alt='Donkey Kong'></img>
                            <h3>Donkey Kong</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Bowser} alt='Bowser'></img>
                            <h3>Bowser</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DryBones} alt='Dry Bones'></img>
                            <h3>Dry Bones</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BowserJR} alt='Bowser JR'></img>
                            <h3>Bowser Jr</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DryBowser} alt='Dry Bowser'></img>
                            <h3>Dry Bowser</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Kamek} alt='Kamek' id='HugeKamek'></img>
                            <h3>Kamek</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Lemmy} alt='Lemmy'></img>
                            <h3>Lemmy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Larry} alt='Larry'></img>
                            <h3>Larry</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Wendy} alt='Wendy'></img>
                            <h3>Wendy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Ludwig} alt='Ludwig'></img>
                            <h3>Ludwig</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Iggy} alt='Iggy'></img>
                            <h3>Iggy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Roy} alt='Roy'></img>
                            <h3>Roy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Morton} alt='Morton'></img>
                            <h3>Morton</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Peachette} alt='Peachette'></img>
                            <h3>Peachette</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Inkling} alt='Inkling'></img>
                            <h3>Inkling</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Villager} alt='Villager'></img>
                            <h3>Villager</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Isabelle} alt='Isabelle'></img>
                            <h3>Isabelle</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Link} alt='Link'></img>
                            <h3>Link</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DiddyKong} alt='Diddy Kong'></img>
                            <h3>Diddy Kong</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={FunkyKong} alt='Funky Kong'></img>
                            <h3>Funky Kong</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Pauline} alt='Pauline'></img>
                            <h3>Pauline</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Mii} alt='Mii'></img>
                            <h3>Mii</h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Home;