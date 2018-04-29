import * as React from "react";
require("./css/LandingPage.css");
interface Props {}

export default class Hero extends React.Component<Props> {
  render() {
    return (
      <div className="hero">
        <img
          width="100%"
          src="https://firebasestorage.googleapis.com/v0/b/pocketflix-external.appspot.com/o/images%2FCrimeofFashion_bookcover1024x700.png?alt=media&token=41154950-e93a-47ef-a04d-18fde09fb007"
        />
        <img
          width="300px"
          className="logo"
          src="https://firebasestorage.googleapis.com/v0/b/pocketflix-external.appspot.com/o/images%2Fgame_logo.png?alt=media&token=aec4c7bf-14c2-4600-922f-a4a0b7dd9788"
        />
      </div>
    );
  }
}
