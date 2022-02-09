import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import NewChoices from "../components/NewChoices";
import Choices from "../components/Choices";
import Genre from "../components/Genre";
import Options from "../components/Options/Options";
import Quiz from "../components/Quiz/Quiz";
import Critique from "../components/Critique";
import Book from "../components/Book";
import Help from "../components/Help";
import Answers from "../components/Answers";
import Author from "../components/Author";

const botName = "Luca";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(
      `Hallo, ich bin ${botName}, dein Empfehlungssystem. Ich würde dir gerne bei deiner Suche behilflich sein und dir Bücher empfehlen.`
    ),
    createChatBotMessage(`Wonach möchtest du suchen?`, {
      widget: "help"
    })
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E"
    },
    chatButton: {
      backgroundColor: "#376B7E"
    }
  },
  widgets: [
    {
      widgetName: "help",
      widgetFunc: (props) => <Help {...props} />
    },
    {
      widgetName: "genre",
      widgetFunc: (props) => <Genre {...props} />
    },
    {
      widgetName: "author",
      widgetFunc: (props) => <Author {...props} />
    },
    {
      widgetName: "book",
      widgetFunc: (props) => <Book {...props} />
    },
    {
      widgetName: "choices",
      widgetFunc: (props) => <Choices {...props} />
    },
    {
      widgetName: "newChoices",
      widgetFunc: (props) => <NewChoices {...props} />
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />
    },
    {
      widgetName: "critique",
      widgetFunc: (props) => <Critique {...props} />
    },
    {
      widgetName: "answers",
      widgetFunc: (props) => <Answers {...props} />
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "What is closure?",
            answer:
              "Closure is a way for a function to retain access to it's enclosing function scope after the execution of that function is finished.",
            id: 1
          },
          {
            question: "Explain prototypal inheritance",
            answer:
              "Prototypal inheritance is a link between an object and an object store that holds shared properties. If a property is not found on the host object, javascript will check the prototype object.",
            id: 2
          }
        ]
      }
    }
  ]
};

export default config;
