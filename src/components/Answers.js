import React from "react";

import "./Knopf.css";

const Answers = (props) => {
  const answers = [
    {
      text: "Ja, gerne.",
      handler: props.actionProvider.buyBook,
      id: 1
    },
    { text: "Nein, danke.", handler: props.actionProvider.criticizeRec, id: 2 }
  ];

  const buttonsMarkup = answers.map((answer) => (
    <button key={answer.id} onClick={answer.handler} className="knopf-button">
      {answer.text}
    </button>
  ));

  return <div className="knopf-container">{buttonsMarkup}</div>;
};

export default Answers;
