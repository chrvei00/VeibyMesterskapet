import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import birdieDramPic from "../assets/birdieDram.jpg";
import skogshorn from "../assets/skogshorn.jpg";
import peergolf from "../assets/peergolf.jpg";
import pappadalt from "../assets/pappadalt.jpg";
import kristiansand from "../assets/kristiansand.jpg";
import poden from "../assets/poden.jpg";
import voss from "../assets/voss.jpg";
import "./Test.css";

interface Question {
  question: string;
  picture: any;
  answers: string[];
  correctAnswer: string;
}

const Questions: Question[] = [
  {
    question: "Hva skjer på dette bildet?",
    picture: birdieDramPic,
    answers: [
      "Peer bommet putten",
      "Bestefar bommet putten",
      "Peer fikk en birdie",
      "Bestefar fikk en eagle",
    ],
    correctAnswer: "Peer fikk en birdie",
  },
  {
    question: "Hva heter toppen?",
    picture: skogshorn,
    answers: ["Grønnsaksknippa", "Skogshorn", "Grønnsenknippa", "Kilimanjaro"],
    correctAnswer: "Skogshorn",
  },
  {
    question: "Hvordan endte dette slaget?",
    picture: peergolf,
    answers: [
      "2 meter fra pinnen og birdie",
      "I vannet",
      "10 meter forran der ballen startet",
      "Hole in one",
    ],
    correctAnswer: "10 meter forran der ballen startet",
  },
  {
    question: "Hvem skal ut?",
    picture: pappadalt,
    answers: ["Yatzy", "Bingo", "Ludo"],
    correctAnswer: "Yatzy",
  },
  {
    question: "Hva heter byen?",
    picture: kristiansand,
    answers: ["Bergen", "Kristiansand", "Voss", "Sandefjord"],
    correctAnswer: "Kristiansand",
  },
  {
    question: "Hva har vi nettopp gjort?",
    picture: poden,
    answers: [
      "Spilt poden",
      "Måket taket",
      "Løpt opp slalombakken",
      "Spilt golf",
    ],
    correctAnswer: "Spilt poden",
  },
  {
    question: "Hva heter byen?",
    picture: voss,
    answers: ["Kristiansand", "Bergen", "Voss", "Sandefjord"],
    correctAnswer: "Voss",
  },
];

const Test: React.FC = () => {
  const navigate = useNavigate();

  const [questionIndex, setQuestionIndex] = React.useState(0);
  const [score, setScore] = React.useState([] as boolean[]);
  const [failed, setFailed] = React.useState(false);

  const handleAnswer = (answer: string) => {
    if (Questions[questionIndex].correctAnswer !== answer) {
      setFailed(true);
    } else {
      if (questionIndex === Questions.length - 1) {
        if (score.filter((s) => s).length >= 2) {
          navigate("/passed");
        }
      }
    }
    setScore([...score, answer === Questions[questionIndex].correctAnswer]);
    setQuestionIndex(questionIndex + 1);
  };

  const handleRestart = () => {
    setQuestionIndex(0);
    setScore([]);
    setFailed(false);
  };

  return (
    <div>
      <h1 className="questionIndex">
        Spørsmål {questionIndex + 1} av {Questions.length}
      </h1>
      <div className="scoreDiv">
        {score.map((score) => (score ? <CheckIcon /> : <ClearIcon />))}
      </div>
      {!failed ? (
        <div className="questionDiv">
          <h2 className="questionText">{Questions[questionIndex].question}</h2>
          <img
            className="questionImage"
            width={300}
            src={Questions[questionIndex].picture}
            alt="Klarer ikke å laste inn bilde"
          />
          <div className="answerDiv">
            {Questions[questionIndex].answers.map((answer) => (
              <div className="singleAnswerDiv" key={answer}>
                <Button
                  variant="contained"
                  id="answerButton"
                  onClick={() => handleAnswer(answer)}
                >
                  {answer}
                </Button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="questionDiv">
          <h1>Du svarte feil</h1>
          <Button variant="contained" color="error" onClick={handleRestart}>
            Prøv igjen{" "}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Test;
