import React, { Component } from "react";
import zoro from '../assets/images/Roronoa zoro.jpg';
import luffy from '../assets/images/Luffy Zoro.jpg'

class ToogleImgComp extends Component {
    constructor() {
      super();
      this.state = {
        currentImage: zoro,
        currentAlt: "zoro",
        currentTitle: "zoro",
      };
    }
  
    switchimgs = () => {
      this.setState((prevState) => {
        if (prevState.currentAlt === "zoro") {
          return {
            currentImage: luffy,
            currentAlt: "luffy",
            currentTitle: "luffy",
          };
        } else {
          return {
            currentImage: zoro,
            currentAlt: "zoro",
            currentTitle: "zoro",
          };
        }
      });
    };
  
    render() {
      const { currentImage, currentAlt, currentTitle } = this.state;
  
      return (
        <div>
          <h1>Task 1</h1>
          <div className="task1">
            <div className="switchbox">
              <img src={currentImage} alt={currentAlt} id="img1" />
              <h1 id="title1">{currentTitle}</h1>
              <button type="button" onClick={this.switchimgs}>
                Switch
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
export default ToogleImgComp;