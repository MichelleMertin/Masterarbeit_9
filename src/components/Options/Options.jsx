import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Fantasy",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1
    },
    { text: "Krimi", handler: props.actionProvider.greet, id: 2 },
    { text: "Liebesroman", handler: () => {}, id: 3 },
    { text: "Sci-Fi", handler: () => {}, id: 4 }
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
