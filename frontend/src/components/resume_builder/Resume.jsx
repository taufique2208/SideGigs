import React, { createRef, useContext } from "react";
import Pdf from "react-to-pdf";
import ResumeContext from "../../context/ResumeContext";
import { makeStyles } from "@material-ui/core/styles";
import {generatePDF, usePDF} from "react-to-pdf";
import './Resume.css'

const useStyles = makeStyles((theme) => ({
  buttonBuildNew: {
    cursor: "pointer",
    minWidth: "7rem",
    textAlign: "center",
    border: "none",
    padding: "1rem",
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 19%)",
    "&:hover": {
      background: "#d6d6d6",
    },
  },
  buttonDownload: {
    cursor: "pointer",
    minWidth: "7rem",
    textAlign: "center",
    border: "none",
    padding: "1rem",
    boxShadow: "0 1px 1px 0 rgb(0 0 0 / 20%), 0 1px 2px 0 rgb(0 0 0 / 19%)",
    background: "#77bb77",
    "&:hover": {
      background: "#548854",
    },
  },
  resume: {
    padding: "3rem",
    boxShadow: "0 0.5rem 1rem 0 rgb(0 0 0 / 10%)",
    marginBottom: "1rem",
    margin: "1rem",
    marginTop: "3rem",
  },
}));

let refreshPage = () => {
  window.location.reload();
};

function Resume() {
  const ref = createRef();
  const { toPDF, targetRef} = usePDF({filename: 'page.pdf'});

  const value = useContext(ResumeContext);
  // const = useStyles();

  let { answers } = value.state;
  return (
    <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop:"30px"
                  }}
                >
                  <button className='buttonBuildNew' onClick={refreshPage}>
                    Build New
                  </button>
                  <button onClick={()=>toPDF()} className='buttonDownload'>
                        Download Resume
                      </button>
                  {/* {/* <Pdf > */}
          {/* <button onClick={() => generatePDF(ref, {filename: 'page.pdf'})}>Download PDF</button> */}
                    {/* {toPdf} => ( */}
                      {/* <button onClick={()=>toPDF} className={buttonDownload}> */}
                        {/* Download Resume */}
                      {/* </button>  */}
                    {/* )} */}
                  {/* </Pdf> */}
                </div>
      <div ref={targetRef} className='resume'>
        {answers.map((answer) => {
          return (
            <div>
              {answer.resumeFieldId === "name" ||
              answer.resumeFieldId === "email" ||
              answer.resumeFieldId === "address" ||
              answer.resumeFieldId === "phoneNumber" ? (
                <div
                  style={{
                    textAlign: "right",
                  }}
                >
                  <label>{answer.answer}</label>
                </div>
              ) : (
                <div style={{textAlign:"left"}}>
                  <hr></hr>
                  <h4><b>{answer.resumeField}</b></h4>
                  <p>{answer.answer}</p>
                 <hr></hr>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resume;