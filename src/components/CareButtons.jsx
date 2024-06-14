import { useEffect } from "react";

export const CareButtons = ({
  health,
  fullness,
  happiness,
  setHealth,
  setFullness,
  setHappiness,
}) => {
  const feedPet = () => {
    setFullness((prevFullness) => Math.min(100, prevFullness + 20));
  };

  const playWithPet = () => {
    setHappiness((prevHappiness) => Math.min(100, prevHappiness + 20));
  };

  const healPet = () => {
    setHealth((prevHealth) => Math.min(100, prevHealth + 20));
  };

  return (
    <>
      <button onClick={feedPet}>
        Feed
      </button>
      <button onClick={playWithPet}>
        Play
      </button>
      <button onClick={healPet}>
        Heal
      </button>
    </>
  );
};
