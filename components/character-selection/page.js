"use client";

// React
import { useState } from "react";

// Third Party Components
import useSound from "use-sound";

// Assets
import { row1, row2, row3, row4 } from "@/json/characters";

// Character Selected Audio Effect
import soundtest1 from "public/audio/character-selection-effects/select-navigate-audio-1.mp3";

const CharacterSelection = () => {
  // States
  const [play] = useSound(soundtest1);
  const [hoveredPerson, setHoveredPerson] = useState("");

  const navigateAudio = () => {
    play();
  };

  const handleMouseEnter = (person) => {
    navigateAudio();
    setHoveredPerson(person.sprite.src);
  };

  const handleMouseLeave = () => {
    setHoveredPerson("");
  };

  return (
    <main className="select-background-container container mx-auto px-4 py-14 h-screen w-full">
      <div className="flex flex-row gap-1  w-full place-content-evenly items-end">
        {hoveredPerson ? (
          <div className="Character">
            <img
              className="Character_spritesheet pixelart face-up"
              src={hoveredPerson}
              alt="Character"
              style={{
                height: "350px",
                width: "150px",
              }}
            />
          </div>
        ) : (
          <h1 className="self-center text-1xl text-center text-gray-50  font-extrabold mb-2">
            Select Your Fighter
          </h1>
        )}
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap justify-center">
            {row1.map((person) => (
              <div
                key={person.id}
                onMouseEnter={() => handleMouseEnter(person)}
                onMouseLeave={handleMouseLeave}
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.profile.src})`,
                }}
              ></div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {row2.map((person) => (
              <div
                key={person.id}
                onMouseEnter={() => handleMouseEnter(person)}
                onMouseLeave={handleMouseLeave}
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.profile.src})`,
                }}
              ></div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {row3.map((person) => (
              <div
                key={person.id}
                onMouseEnter={() => handleMouseEnter(person)}
                onMouseLeave={handleMouseLeave}
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.profile.src})`,
                }}
              ></div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center">
            {row4.map((person) => (
              <div
                key={person.id}
                onMouseEnter={() => handleMouseEnter(person)}
                onMouseLeave={handleMouseLeave}
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.profile.src})`,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CharacterSelection;
