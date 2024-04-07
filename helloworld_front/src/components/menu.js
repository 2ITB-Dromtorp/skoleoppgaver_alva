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
import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import './../css/menu.css';
import './../css/menu2.css';
import Home from './home';

const Menu = ({ onHomeClick, onListClick, onAddClick }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [Data, setData] = useState([]);
  const [selected, setSelected] = useState(null);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getCharacterData")
      .then(response => {
        setData(response.data);
        console.log(Data)
      })
      .catch(error => console.log(error));
  }, []);


  const handleSelectChar = (alt) => {
    setSelected(alt);

    const characterData = Data.filter(item => item.Char === alt);

    const sexualityCounts = characterData.reduce((counts, item) => {
        counts[item.Att] = (counts[item.Att] || 0) + 1;
        return counts;
    }, {});

    const totalSexualityCounts = Data.reduce((counts, item) => {
      counts[item.Att] = (counts[item.Att] || 0) + 1;     
      return counts;
    }, {});

    let entries = Object.entries(sexualityCounts, totalSexualityCounts);
    let sortedSexualityCounts = entries.sort((a, b) => a[1] - b[1]);

    console.log(sortedSexualityCounts);
    console.log(totalSexualityCounts);
    setCollapsed(!collapsed);
};

const handleSelectAttr = (alt) => {
    setSelected(alt);

    const sexualityData = Data.filter(item => item.Att === alt);

    const characterCounts = sexualityData.reduce((counts, item) => {
        counts[item.Char] = (counts[item.Char] || 0) + 1;     
        return counts;
    }, {});

    const totalCharacterCounts = Data.reduce((counts, item) => {
      counts[item.Char] = (counts[item.Char] || 0) + 1;     
      return counts;
    }, {});

    let entries = Object.entries(characterCounts, totalCharacterCounts);
    let sortedCharacterCounts = entries.sort((a, b) => a[1] - b[1]);

    console.log(sortedCharacterCounts);
    console.log(totalCharacterCounts)
    setCollapsed(!collapsed);    
};

  return (
    <div>
      <div className={`side-panel ${collapsed ? 'collapsed' : ''}`}>
        <button className='closebtn' onClick={toggleCollapse}>
          <IoClose />
        </button>
        <div className='words2'>
          <div className='words' onClick={toggleCollapse}>
            <p className="side-selection" id='Homebtn' onClick={onHomeClick}>
                Home
            </p>
            <p className="side-selection" id='InterestingExcerptsbtn' onClick={onHomeClick}>
                Interesting Excerpts
            </p>
            <p className="side-selection" id='FullListbtn' onClick={onListClick}>
                Full List
            </p>
            <p className='side-selection' id='InsertDatabtn' onClick={onAddClick}>
                Insert Data
            </p>
          </div>
        </div>
        <div className='HomeMenu'>
            <div className='selectionMenu'>
                <div className="AttractionContainer">
                    <div className='AttractionRow'>
                        <div className="AttractionEntry">
                            <img src={Asexual} alt='Asexual' onClick={() => handleSelectAttr('Asexual')}></img>
                            <h3>Asexual</h3>
                        </div>
                        <div className="AttractionEntry">
                            <img src={Bisexual} alt='Bisexual' onClick={() => handleSelectAttr('Bisexual')}></img>
                            <h3>Bisexual</h3>
                        </div>
                    </div>
                    <div className='AttractionRow'>
                        <div className="AttractionEntry">
                            <img src={Demisexual} alt='Demisexual' onClick={() => handleSelectAttr('Demisexual')}></img>
                            <h3>Demisexual</h3>
                        </div>
                        <div className="AttractionEntry" >
                            <img src={Gay} alt='Gay' onClick={() => handleSelectAttr('Gay')}></img>
                            <h3>Gay</h3>
                        </div>
                    </div>
                    <div className='AttractionRow'>
                    <div className="AttractionEntry">
                            <img src={Pansexual} alt='Pansexual' onClick={() => handleSelectAttr('Pansexual')}></img>
                            <h3>Pansexual</h3>
                        </div>
                        <div className="AttractionEntry">
                            <img src={Lesbian} alt='Lesbian' onClick={() => handleSelectAttr('Lesbian')}></img>
                            <h3>Lesbian</h3>
                        </div>
                    </div>
                    <div className='AttractionRow'>
                        <div className="AttractionEntry">
                            <img src={Omnisexual} alt='Omnisexual' onClick={() => handleSelectAttr('Omnisexual')}></img>
                            <h3>Omnisexual</h3>
                        </div>
                        <div className="AttractionEntry">
                            <img src={Straight} alt='Straight' onClick={() => handleSelectAttr('Straight')}></img>
                            <h3>Straight</h3>
                        </div>
                    </div>
                </div>

{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

                <div className='CharacterContainer'>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Mario} alt='Mario' onClick={() => handleSelectChar('Mario')}></img>
                            <h3>Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Luigi} alt='Luigi' onClick={() => handleSelectChar('Luigi')}></img>
                            <h3>Luigi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={PrincessPeach} alt='Peach'onClick={() => handleSelectChar('PrincessPeach')}></img>
                            <h3>Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Daisy} alt='Daisy' onClick={() => handleSelectChar('Daisy')}></img>
                            <h3>Daisy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Rosalina} alt='Rosalina' onClick={() => handleSelectChar('Rosalina')}></img>
                            <h3>Rosalina</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={TanookiMario} alt='TanookiMario' onClick={() => handleSelectChar('TanookiMario')}></img>
                            <h3>Tanooki Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={CatPeach} alt='CatPeach' onClick={() => handleSelectChar('CatPeach')}></img>
                            <h3>Cat Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Birdo} alt='Birdo' onClick={() => handleSelectChar('Birdo')}></img>
                            <h3>Birdo</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Yoshi} alt='Yoshi' onClick={() => handleSelectChar('Yoshi')}></img>
                            <h3>Yoshi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Toad} alt='Toad' onClick={() => handleSelectChar('Toad')}></img>
                            <h3>Toad</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={KoopaTroopa} alt='KoopaTroopa' onClick={() => handleSelectChar('KoopaTroopa')}></img>
                            <h3>Koopa</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={ShyGuy} alt='ShyGuy' onClick={() => handleSelectChar('ShyGuy')}></img>
                            <h3>Shy Guy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Lakitu} alt='Lakitu' onClick={() => handleSelectChar('Lakitu')}></img>
                            <h3>Lakitu</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Toadette} alt='Toadette' onClick={() => handleSelectChar('Toadette')}></img>
                            <h3>Toadette</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={KingBoo} alt='KingBoo' onClick={() => handleSelectChar('KingBoo')}></img>
                            <h3>King Boo</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={PeteyPiranha} alt='PeteyPiranha' onClick={() => handleSelectChar('PeteyPirana')}></img>
                            <h3>Petey Piranha</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={BabyMario} alt='BabyMario' onClick={() => handleSelectChar('BabyMario')}></img>
                            <h3>Baby Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyLuigi} alt='BabyLuigi' onClick={() => handleSelectChar('BabyLuigi')}></img>
                            <h3>Baby Luigi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyPeach} alt='BabyPeach' onClick={() => handleSelectChar('BabyPeach')}></img>
                            <h3>Baby Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyDaisy} alt='BabyDaisy' onClick={() => handleSelectChar('BabyDaisy')}></img>
                            <h3>Baby Daisy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BabyRosalina} alt='BabyRosalina' onClick={() => handleSelectChar('BabyRosalina')}></img>
                            <h3>Baby Rosalina</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={MetalMario} alt='MetalMario' onClick={() => handleSelectChar('MetalMario')}></img>
                            <h3>Metal Mario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={PinkGoldPeach} alt='PinkGoldPeach' onClick={() => handleSelectChar('PinkGoldPeach')}></img>
                            <h3>Pink Gold Peach</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Wiggler} alt='Wiggler' onClick={() => handleSelectChar('Wriggler')}></img>
                            <h3>Wiggler</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Wario} alt='Wario' onClick={() => handleSelectChar('Wario')}></img>
                            <h3>Wario</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Waluigi} alt='Waluigi' onClick={() => handleSelectChar('Waluigi')}></img>
                            <h3>Waluigi</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DonkeyKong} alt='DonkeyKong' onClick={() => handleSelectChar('DonkeyKong')}></img>
                            <h3>Donkey Kong</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Bowser} alt='Bowser' onClick={() => handleSelectChar('Bowser')}></img>
                            <h3>Bowser</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DryBones} alt='DryBones' onClick={() => handleSelectChar('DryBones')}></img>
                            <h3>Dry Bones</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={BowserJR} alt='BowserJR' onClick={() => handleSelectChar('BowserJR')}></img>
                            <h3>Bowser Jr</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DryBowser} alt='DryBowser' onClick={() => handleSelectChar('DryBowser')}></img>
                            <h3>Dry Bowser</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Kamek} alt='Kamek' id='HugeKamek' onClick={() => handleSelectChar('Kamek')}></img>
                            <h3>Kamek</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Lemmy} alt='Lemmy' onClick={() => handleSelectChar('Lemmy')}></img>
                            <h3>Lemmy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Larry} alt='Larry' onClick={() => handleSelectChar('Larry')}></img>
                            <h3>Larry</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Wendy} alt='Wendy' onClick={() => handleSelectChar('Wendy')}></img>
                            <h3>Wendy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Ludwig} alt='Ludwig' onClick={() => handleSelectChar('Ludwig')}></img>
                            <h3>Ludwig</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Iggy} alt='Iggy' onClick={() => handleSelectChar('Iggy')}></img>
                            <h3>Iggy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Roy} alt='Roy' onClick={() => handleSelectChar('Roy')}></img>
                            <h3>Roy</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Morton} alt='Morton' onClick={() => handleSelectChar('Morton')}></img>
                            <h3>Morton</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Peachette} alt='Peachette' onClick={() => handleSelectChar('Peachette')}></img>
                            <h3>Peachette</h3>
                        </div>
                    </div>
                    <div className='CharacterRow'>
                        <div className='CharacterEntry'>
                            <img src={Inkling} alt='Inkling' onClick={() => handleSelectChar('Inkling')}></img>
                            <h3>Inkling</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Villager} alt='Villager' onClick={() => handleSelectChar('Villager')}></img>
                            <h3>Villager</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Isabelle} alt='Isabelle' onClick={() => handleSelectChar('Isabelle')}></img>
                            <h3>Isabelle</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Link} alt='Link' onClick={() => handleSelectChar('Link')}></img>
                            <h3>Link</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={DiddyKong} alt='DiddyKong' onClick={() => handleSelectChar('DiddyKong')}></img>
                            <h3>Diddy Kong</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={FunkyKong} alt='FunkyKong' onClick={() => handleSelectChar('FunkyKong')}></img>
                            <h3>Funky Kong</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Pauline} alt='Pauline' onClick={() => handleSelectChar('Pauline')}></img>
                            <h3>Pauline</h3>
                        </div>
                        <div className='CharacterEntry'>
                            <img src={Mii} alt='Mii' onClick={() => handleSelectChar('Mii')}></img>
                            <h3>Mii</h3>
                        </div>
                    </div>
                </div>
            </div>
    </div>
      </div>
      <button className="openbtn" onClick={toggleCollapse}>
        <IoMenu />
      </button>
    </div>
  );
};

export default Menu;