import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },

  {
    id: 2003,
    question: "What are the three steps of using state?",
    answer: "Define, use, update",
  },

  {
    id: 2004,
    question: "What are controlled elements in React?",
    answer:
      " In a controlled component react, state handles all the form data, whereas, in an uncontrolled component, the HTML form element data is managed by only the DOM.",
  },

  {
    id: 2005,
    question: "How do we use useState function in React",
    answer:
      "it can be used to create multiple pieces of state in order to track data that cahnges over the lifecycle of an application",
  },

  {
    id: 2005,
    question: "What are the two types of state?",
    answer: "local and global",
  },

  {
    id: 2006,
    question: "What is the difference between state and props?",
    answer:
      "state is internal data - data which is owned by the component inwhich it is declared. props is external data (owned bu the parent component.) think of it as fucntion parameters. State can be thought of as the component's memory - it can hold dara over time - acorss multiple re-renders. We use the mechanisim of state to make componenets interactive. props are read only (cannot be modified)",
  },

  {
    id: 2006,
    question: "What is derived state?",
    answer:
      "state that is computed from an existing piece of state or from props",
  },

  {
    id: 2007,
    question: "What is an API?",
    answer:
      "Application Programming Interface: a piece of software that can be used by another piece of software, in order to allow applications to talk to each other",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
