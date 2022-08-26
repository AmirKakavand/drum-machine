import React from "react";

function DrumPad({ id, drumPadKey, keyCode, url, playAudio }) {
  return (
    <div
      id={id}
      className={"drum-pad"}
      onClick={(event) => {
        playAudio(drumPadKey);
      }}
    >
      {drumPadKey}
      <audio id={drumPadKey} src={url} className={"clip"} />
    </div>
  );
}

export default DrumPad;
