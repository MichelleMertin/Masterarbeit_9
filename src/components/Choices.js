import React from "react";

import "./Knopf.css";

const Choices = (props) => {
  const choices = [
    {
      text: "Kaufen",
      handler: props.actionProvider.buyBook,
      id: 1
    },
    { text: "Nachfragen", handler: props.actionProvider.askRec, id: 2 },
    { text: "Kritisieren", handler: props.actionProvider.criticizeRec, id: 3 },
    { text: "Beenden", handler: props.actionProvider.endConv, id: 4 }
  ];

  const buttonsMarkup = choices.map((choice) => (
    <button key={choice.id} onClick={choice.handler} className="knopf-button">
      {choice.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Choices;
