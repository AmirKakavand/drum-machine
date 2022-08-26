import { useState } from "react";
import DrumPad from "./components/DrumPad";
import "./App.scss";

const keys = [
  {
    id: 1,
    drumPadKey: 'Q',
    keyCode: 81,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    id: 2,
    drumPadKey: 'W',
    keyCode: 87,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    id: 3,
    drumPadKey: 'E',
    keyCode: 69,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    id: 4,
    drumPadKey: 'A',
    keyCode: 65,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    id: 5,
    drumPadKey: 'S',
    keyCode: 83,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    id: 6,
    drumPadKey: 'D',
    keyCode: 68,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    id: 7,
    drumPadKey: 'Z',
    keyCode: 90,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    id: 8,
    drumPadKey: 'X',
    keyCode: 88,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    id: 9,
    drumPadKey: 'C',
    keyCode: 67,
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

function App() {
  const [display, setDisplay] = useState("");

  const playAudio = (drumPadKey) => {
    const audioFile = document.getElementById(drumPadKey);
    setDisplay(drumPadKey);
    audioFile.play();
  };
  window.addEventListener("keyup", (event) => {
    const pressedKey = event.code.charAt(event.code.length - 1);
    playAudio(pressedKey);
  });
  return (
    <div id={"drum-machine"}>
      <div className={"buttons-container"}>
        {keys.map((key) => (
          <DrumPad
            key={key.id}
            id={key.id}
            drumPadKey={key.drumPadKey}
            url={key.url}
            playAudio={playAudio}
          />
        ))}
      </div>
      <div id={"display"}>{display}</div>
    </div>
  );
}

export default App;
