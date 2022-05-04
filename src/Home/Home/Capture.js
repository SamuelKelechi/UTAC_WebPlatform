import React from "react";
import styled from "styled-components"

const Capture = () => {
  return (
    <div>
      <center
        style={{
          width: "80%",
          marginTop: "30px",
          fontSize: "22px",
          lineHeight: "1.15",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        <h3 style={{color:"#FAB43F", fontSize: "30px"}}>Our Vision</h3>
        {/* <Quoting> */}
        We see an Africa where every child is
        fed and educated. An Africa where talent
        is nurtured and mentorship is paramount.
        {/* </Quoting> */}
        <br />
        <br />
        <br />

        <h3 style={{color:"#FAB43F", fontSize: "30px"}}>Our Mission</h3>
        Zero Hunger <br />and<br /> Mentorship
      </center>
    </div>
  );
};

export default Capture;

// const Quoting = styled.div`
//   text-align: center;
//   background-color:white;
//   overflow: hidden;       /* Ensures the content is not revealed until the animation */
//   border-right: .15em solid C3008B;       /* The typwriter cursor */
//   white-space: wrap;      /* Keeps the content on a single line */
//   margin: 0 auto;       /* Gives that scrolling effect as the typing happens */
//   letter-spacing: .15em;    /* Adjust as needed */
//   animation: typing 10s steps(40, end), blink-caret .75s step-end infinite;

//   @keyframes typing {
//     from { width: 0 }
//     to { width: 100% }
//   }
//   @keyframes blink-caret {
//     from, to { border-color: transparent }
//     50% { border-color: orange; }
//     }
// `