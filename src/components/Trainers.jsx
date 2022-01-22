import React from "react";
import "./Trainers.css";

function Trainers() {
  const gallery = [
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/1.png"),
    },

    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/2.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/3.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/4.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/5.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/6.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/7.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/8.png"),
    },

    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/9.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/10.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Tranining: Growth Hack",
      img: require("../assets/images/11.png"),
    },
    {
      id: 1,
      name: "Daniel Oratokhai",
      training: "Growth Hack",
      title: "Training:",
      img: require("../assets/images/12.png"),
      handle: "websitechic",
    },
  ];

  return (
    <div className="trainers">
      <h3> Our Trainers </h3>

      <div className="content">
        {gallery.map((e, id) => {
          return (
            <>
              <div className="main-content">
                <img src={e.img} alt="" />

                <div className="abs-content">
                  <h2>{e.name}</h2>
                  <h4>{e.title}</h4> <p> {e.training}</p>
                  <div className="handle">
                    <h4>{e.handle}</h4>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Trainers;
