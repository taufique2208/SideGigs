
import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography, Box } from "@material-ui/core";
import Question from "./Question";
import ResumeContext from "../../context/ResumeContext";
import Resume from "./Resume";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
  },
  progressBar: {
    margin: "1rem",
  },
  question: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "80vh",
  },
  question: {},
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <div style={{alignItems:'center',justifyContent:'center',width:'100%',textAlign:'center'}}>
      <div style={{width:'50px',height:'50px',borderRadius:'25px',border:'2px solid black',boxShadow:'5px 5px black',backgroundColor:'white',fontSize:'20px',padding:'7px'}}>
      
       {`${Math.round(
          props.value
        )}%`}
    
      </div>
      </div>
    </Box>
  );
}

function Questions() {
  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);

  const value = useContext(ResumeContext);
  let { questionAnswer, questions, answers } = value.state;
  console.log(answers.length, questions.length);

  // useEffect(() => {
  //   setProgress(
  //     (answers.length / questions.length) * 100
  //       ? (answers.length / questions.length) * 100
  //       : 0
  //   );
  // }, [answers]);

  useEffect(() => {
    setProgress((answers.length / questions.length) * 100);
  }, [answers, questions.length]);
  
  return (
    <div>
      {questions.length !== answers.length ? (
        <LinearProgressWithLabel
          value={progress}
          className={classes.progressBar}
        />
      ) : null}
      <div className={classes.root}>
        {questions.length === answers.length ? (
          <Resume />
          // <div>Done</div>
        ) : (
          <div className={classes.question}>
            <Question question={questionAnswer.question} />
          </div>
        )}
      </div>
    </div>
  );
}
export default Questions;