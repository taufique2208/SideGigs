import React, { useEffect, useState } from "react";
import ResumeContext from "../context/ResumeContext";
import questionsArray from "../utility/questionsArray";
import Questions from "../components/resume_builder/Questions";
import { Typography } from "@material-ui/core";

function ResumeBuilder() {
  let [questions, setQuestions] = useState([]);
  let [answers, setAnswers] = useState([]);
  let [questionAnswer, setQuestionAnswer] = useState({});

  useEffect(() => {
    setQuestions(questionsArray);
    setQuestionAnswer(questionsArray[0]);
  }, []);

  let handleChangeInput = (e) => {
    setQuestionAnswer({
      ...questionAnswer,
      answer: e.target.value,
    });
  };

  // let nextQuestion = (e) => {
  //   e.preventDefault();
  //   questions.map((question) => {
  //     if (question.resumeFieldId == questionAnswer.resumeFieldId) {
  //       setAnswers([
  //         ...answers,
  //         { ...question, answer: questionAnswer.answer },
  //       ]);
  //     }
  //   });

  //   questions.map((qa, index) => {
  //     if (index <= questions.length) {
  //       if (qa.resumeFieldId === questionAnswer.resumeFieldId) {
  //         setQuestionAnswer(questions[index + 1]);
  //       }
  //     }
  //   });
  // };
  let nextQuestion = (e) => {
    e.preventDefault();
    questions.forEach((question) => {
      if (question.resumeFieldId === questionAnswer.resumeFieldId) {
        setAnswers([...answers, { ...question, answer: questionAnswer.answer }]);
      }
    });
  
    const currentIndex = questions.findIndex(
      (qa) => qa.resumeFieldId === questionAnswer.resumeFieldId
    );
  
    if (currentIndex < questions.length - 1) {
      setQuestionAnswer(questions[currentIndex + 1]);
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        state: {
          questionAnswer,
          questions,
          answers,
        },
        function: {
          handleChangeInput: handleChangeInput,
          nextQuestion: nextQuestion,
        },
      }}
    >
      <div className="App">
        {/* <Typography
          variant="h6"
          style={{
            textAlign: "center",
            margin: "2rem",
          }}
        >
          Resume Builder
        </Typography> */}
        <Questions />
      </div>
    </ResumeContext.Provider>
  );
}

export default ResumeBuilder;