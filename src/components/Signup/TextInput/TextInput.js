import React from "react";
import classes from "./TextInput.module.css";

const TextInput = ({ icon, ...rest }) => {
  return (
    <div className={classes.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
};
// const TextInput = ({ type, placeholder }) => {
//   return (
//     <div className={classes.textInput}>
//       <input type={type} placeholder={placeholder} />
//       <span className="material-icons-outlined"> alternate_email </span>
//     </div>
//   );
// };

export default TextInput;
