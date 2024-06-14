import { useEffect, useState } from "react";
import { StatusDisplay } from "./StatusDisplay.jsx";
import { CareButtons } from "./CareButtons.jsx";
import './VirtualPet.css'

export const VirtualPet = () => {
  const [health, setHealth] = useState(100);
  const [fullness, setFullness] = useState(100);
  const [happiness, setHappiness] = useState(100);

  useEffect(() => {
    const degradeFullness = () => {
      setFullness((prevFullness) => Math.max(0, prevFullness - 1));
    };

    const degradeHappiness = () => {
      setHappiness((prevHappiness) => Math.max(0, prevHappiness - 1));
    };

    const fullnessInterval = setInterval(degradeFullness, 60 * 1000); // 1 minute interval
    const happinessInterval = setInterval(degradeHappiness, 60 * 2000); // 2 minute interval

    // Clear intervals on component unmount
    return () => {
      clearInterval(fullnessInterval);
      clearInterval(happinessInterval);
    };
  }, []);

  useEffect(() => {
    const degradeHealth = () => {
      setHealth((prevHealth) => Math.max(0, prevHealth - 1));
    };

    if (fullness === 0 || happiness === 0) {
      const healthInterval = setInterval(degradeHealth, 1000); // 1 second interval

      // Clear interval on component unmount or when dependencies change
      return () => clearInterval(healthInterval);
    }
  }, [fullness, happiness]);

  return (
    <>
      <div>
        <h1>Glug</h1>
        <h2>Hi! My name is Glug. I require occasional care, like a goldfish!</h2>
        <h3>Please don't kill me.</h3>
        <div className="vpet-head">^---^</div>
        <div className="vpet-eyes">|&nbsp; o_o |</div>
        <div className="vpet-body">|  v--v  |</div>
        <StatusDisplay
          health={health}
          fullness={fullness}
          happiness={happiness}
        />
        <CareButtons
          health={health}
          setHealth={setHealth}
          fullness={fullness}
          setFullness={setFullness}
          happiness={happiness}
          setHappiness={setHappiness}
        />
      </div>
    </>
  );
};
