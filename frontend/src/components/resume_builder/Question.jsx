
import React, { useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ResumeContext from "../../context/ResumeContext";
import { ArrowRight } from "@material-ui/icons";
import './Resume.css'


function Question() {
  const { state, function: { handleChangeInput, nextQuestion } } = useContext(ResumeContext);

  const { questionAnswer } = state;
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };
  return (
    <div>
      <form noValidate id='myForm' autoComplete="on" onSubmit={nextQuestion}>
        <div>{questionAnswer.question}</div>
        <input
          id="standard-basic"
          // label={questionAnswer.question}
          name={questionAnswer.resumeFieldId}
          value={questionAnswer.answer || ""}
          onChange={handleChangeInput}
          className={questionAnswer.resumeFieldId=="name"||questionAnswer.resumeFieldId=='email'||questionAnswer.resumeFieldId=="phoneNumber"?"small-input":"large-input"}
        />
        <div >
          <Button
            type="submit"
            // variant="contained"
            // color="default"
            className='buttonDownload'
            style={{float:'right',width:'200px',height:'50px',borderRadius:'0',background:'lightblue',border:'2px solid black',fontStyle:'bold'}}
            // endIcon={<ArrowRight />}
          >
            N E X T
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Question;
// function Question() {
//   const classes = useStyles();
//   const value = useContext(ResumeContext);

//   let { questionAnswer } = value.state;
//   let { handleChangeInput, nextQuestion } = value.function;
//   return (
//     <div>
//       <form noValidate autoComplete="on" onSubmit={nextQuestion}>
//         <TextField
//           id="standard-basic"
//           label={questionAnswer.question}
//           name={questionAnswer.resumeFieldId}
//           value={questionAnswer.answer ? questionAnswer.answer : ""}
//           onChange={handleChangeInput}
//         />
//         <div className={classes.buttonContainer}>
//           <Button
//             type="submit"
//             variant="contained"
//             color="default"
//             className={classes.button}
//             endIcon={<ArrowRight />}
//           >
//             Next
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default Question;