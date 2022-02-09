import React from "react";

const Critique = (props) => {
  const critiques = [
    {
      text: "Erscheinungsjahr",
      handler: (event) => {
        console.log(event.target.value);
        props.actionProvider.recommend(event.target.value);
      },
      id: 1
    },
    {
      text: "Kenne ich schon",
      handler: (event) => {
        console.log(event.target.value);
        props.actionProvider.recommend(event.target.value);
      },
      id: 2
    },
    {
      text: "Seitenanzahl",
      handler: (event) => {
        console.log(event.target.value);
        props.actionProvider.recommend(event.target.value);
      },
      id: 3
    },
    { text: "Genre", handler: props.actionProvider.chooseGenre, id: 4 },
    { text: "Autor", handler: props.actionProvider.chooseAuthor, id: 5 }
  ];

  const buttonsMarkup = critiques.map((critique) => (
    <button
      key={critique.id}
      value="Tom Clancy"
      onClick={critique.handler}
      className="knopf-button"
    >
      {critique.text}
    </button>
  ));

  return <div>{buttonsMarkup}</div>;
};

export default Critique;
