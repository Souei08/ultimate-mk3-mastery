"use client";

// React
import { useRef, useState } from "react";

// Assets
import { row1, row2, row3, row4 } from "@/JSON/characters";

const CharacterSelection = () => {
  const audioRef = useRef(null);

  // useStates
  const [hoveredPerson, setHoveredPerson] = useState("");

  const navigateAudio = () => {
    const audio = new Audio("/effect.mp3");
    audio.play();
  };

  const handleMouseEnter = (person) => {
    setHoveredPerson(person.sprite.src);
  };

  const handleMouseLeave = () => {
    setHoveredPerson("");
  };

  return (
    <main className="select-background-container container mx-auto px-4 py-14 h-screen w-full">
      <div class="flex flex-row gap-1  w-full place-content-evenly items-end">
        <audio ref={audioRef}>
          <source src={hoveredPerson.audio} />
        </audio>

        {hoveredPerson ? (
          <div class="Character">
            <img
              class="Character_spritesheet pixelart face-up"
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
        <div class="flex flex-col gap-1">
          <div class="flex flex-wrap justify-center">
            {row1.map((person) => (
              <div
                key={person.profile}
                onMouseEnter={() => handleMouseEnter(person)}
                onMouseLeave={handleMouseLeave}
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.profile.src})`,
                }}
              ></div>
            ))}
          </div>
          <div class="flex flex-wrap justify-center">
            {row2.map((person) => (
              <div
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.src})`,
                }}
              ></div>
            ))}
          </div>
          <div class="flex flex-wrap justify-center">
            {row3.map((person) => (
              <div
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.src})`,
                }}
              ></div>
            ))}
          </div>
          <div class="flex flex-wrap justify-center">
            {row4.map((person) => (
              <div
                className="mk-characters-container"
                style={{
                  backgroundImage: `url(${person.src})`,
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
