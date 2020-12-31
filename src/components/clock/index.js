import React, { Component } from "react";
import "./style.css";

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
  
    if (h === 0) {
      h = 12;
    }
  
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }
  
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
  
    time = h + ":" + m + ":" + s + " " + session;
    console.log(time);
    var clockEl = document.getElementById('firstIcon');
    clockEl.innerText = time;

    console.log(clockEl);
  
    setTimeout(showTime, 1000);
  }

class Clock extends Component {
    componentDidMount() {
        showTime();
    }
    
  render() {
    return (
      <div>
        <div id="firstIcon" className="clock"></div>
      </div>
    );
  }
}

var time;



export default Clock;
