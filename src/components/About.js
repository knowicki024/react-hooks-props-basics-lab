import React from "react";

function About({bio, links}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.length > 1? <p>{bio}</p> : <></>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
    </div>
  );
}



export default About;