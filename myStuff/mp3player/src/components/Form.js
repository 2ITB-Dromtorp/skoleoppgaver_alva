import React, { useState } from 'react';
import './../style/Form.css';

const CheckboxForm = () => {
  const [formData, setFormData] = useState({
    Game1: true,
    Game2: true,
    Game3: true,

    Section1: true,
    Section2: true,
    Section3: true,
    Section4: true,
    Section5: true,

    Band1: true,
    Band2: true,
    Band3: true,
    Band4: true,
    Band5: true,
    Band6: true,
    Band7: true,
    Band8: true,
    Band9: true,
    Band10: true,
    Band11: true,
    Band12: true,
    Band13: true,
    Band14: true,
    Band15: true,
    Band16: true,
    Band17: true,
    Band18: true,
    Band19: true,
    Band20: true,
    Band21: true,
    Band22: true,
    Band23: true,
    Band24: true,
    Band25: true,
    Band26: true,
    Band27: true,
    Band28: true,
    Band29: true,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Game</h2>
      <label>
        <input
          type="checkbox"
          name="Game1"
          checked={formData.Game1}
          onChange={handleCheckboxChange}
          />
          Splatoon 1
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Game2"
          checked={formData.Game2}
          onChange={handleCheckboxChange}
          />
          Splatoon 2
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Game3"
          checked={formData.Game3}
          onChange={handleCheckboxChange}
          />
          Splatoon 3
      </label>
      <br />

      <h2>Section</h2>

      <label>
        <input
          type="checkbox"
          name="Section1"
          checked={formData.Section1}
          onChange={handleCheckboxChange}
          />
          Multiplayer
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Section2"
          checked={formData.Section2}
          onChange={handleCheckboxChange}
          />
          Splatfest
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Section3"
          checked={formData.Section3}
          onChange={handleCheckboxChange}
          />
          Salmon Run
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Section4"
          checked={formData.Section4}
          onChange={handleCheckboxChange}
          />
          Hero Mode
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Section5"
          checked={formData.Section5}
          onChange={handleCheckboxChange}
          />
          DLC
      </label>
      <br />

        <h2>Band</h2>

      <label>
        <input
          type="checkbox"
          name="Band1"
          checked={formData.Band1}
          onChange={handleCheckboxChange}
          />
          Squid Squad
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band2"
          checked={formData.Band2}
          onChange={handleCheckboxChange}
          />
          Chirpy Chips
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band3"
          checked={formData.Band3}
          onChange={handleCheckboxChange}
          />
          Hightide Era
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band4"
          checked={formData.Band4}
          onChange={handleCheckboxChange}
          />
          Squid Sisters
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band5"
          checked={formData.Band5}
          onChange={handleCheckboxChange}
          />
          Turquiose October
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band6"
          checked={formData.Band6}
          onChange={handleCheckboxChange}
          />
          DJ Octavio
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band7"
          checked={formData.Band7}
          onChange={handleCheckboxChange}
          />
          Wet Floor
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band8"
          checked={formData.Band8}
          onChange={handleCheckboxChange}
          />
          Bottom Feeders
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band9"
          checked={formData.Band9}
          onChange={handleCheckboxChange}
          />
          Ink Theory
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band10"
          checked={formData.Band10}
          onChange={handleCheckboxChange}
          />
          Diss-Pair
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band11"
          checked={formData.Band11}
          onChange={handleCheckboxChange}
          />
          SashiMori
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band12"
          checked={formData.Band12}
          onChange={handleCheckboxChange}
          />
          Off the Hook
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band13"
          checked={formData.Band13}
          onChange={handleCheckboxChange}
          />
          Grizzco Industries
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band14"
          checked={formData.Band14}
          onChange={handleCheckboxChange}
          />
          ω-3
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band15"
          checked={formData.Band15}
          onChange={handleCheckboxChange}
          />
          Kamabo Corp.
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band16"
          checked={formData.Band16}
          onChange={handleCheckboxChange}
        />
        Dedf1sh
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band17"
          checked={formData.Band17}
          onChange={handleCheckboxChange}
        />
        C-side
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band18"
          checked={formData.Band18}
          onChange={handleCheckboxChange}
        />
        Front Roe
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band19"
          checked={formData.Band19}
          onChange={handleCheckboxChange}
        />
        Damp Socks
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band20"
          checked={formData.Band20}
          onChange={handleCheckboxChange}
        />
        Yoko and the Gold Bazookas
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band21"
          checked={formData.Band21}
          onChange={handleCheckboxChange}
        />
        H2Whoa
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band22"
          checked={formData.Band22}
          onChange={handleCheckboxChange}
        />
        Deep Cut
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band23"
          checked={formData.Band23}
          onChange={handleCheckboxChange}
        />
        Stars in the Deep
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band24"
          checked={formData.Band24}
          onChange={handleCheckboxChange}
        />
        Mimicry
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band25"
          checked={formData.Band25}
          onChange={handleCheckboxChange}
        />
        Wash Out
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band26"
          checked={formData.Band26}
          onChange={handleCheckboxChange}
        />
        FireFly
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band27"
          checked={formData.Band27}
          onChange={handleCheckboxChange}
        />
        On the Clock
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band28"
          checked={formData.Band28}
          onChange={handleCheckboxChange}
        />
        Anxiety Society
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          name="Band29"
          checked={formData.Band29}
          onChange={handleCheckboxChange}
        />
        Octoplush
      </label>
      <br />
      
      <button className='filterbtn' type="submit">Apply Filters</button>
    </form>
  );
};

export default CheckboxForm;