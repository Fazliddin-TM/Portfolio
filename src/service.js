import React from "react";
import "./service.css";
function Service() {
  return (
    <div className="service " id="Service">
      <div className="skills">
        <div className="skill">
          <div className="skill__name">HTML</div>
          <div className="skill__bar">
            <div
              className="skill__per one"
              per="90%"
              style={{ "max-widht": "90%", }}
            ></div>
          </div>
        </div>

        <div className="skill">
          <div className="skill__name">CSS</div>
          <div className="skill__bar">
            <div
              className="skill__per two"
              per="70%"
              style={{ "max-widht": "70%", }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill__name">Node JS</div>
          <div className="skill__bar">
            <div
              className="skill__per three"
              per="65%"
              style={{ "max-widht": "65%", }}
            ></div>
          </div>
        </div>
        <div className="skill">
          <div className="skill__name">React</div>
          <div className="skill__bar">
            <div
              className="skill__per four"
              per="57%"
              style={{ "max-widht": "57%", }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
