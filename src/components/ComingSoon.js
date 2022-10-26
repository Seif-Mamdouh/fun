import React, { Component } from 'react';
import '../styles/ComingSoon.css';
import Countdown from "./Countdown"
import Lottie from "react-lottie";
import animationData from "../components/lotties/love.json"

class ComingSoon extends Component {
  state = {
    countdown: {
      futureDate: "2022-12-31 00:00:00",
    },
  };

  defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  render() {
    const { countdown } = this.state

    return (
      <div className="background">
        <Countdown futureDate={countdown.futureDate}></Countdown>

      <Lottie options={this.defaultOptions} height={600} width={600}/>
      </div>
      
    );
  }
}

export default ComingSoon;
