import React from "react"
import "./textInput.scss"

const TextInput = ({ inputType, label, id, errors, errorType, ...rest }) => {
   const errorFound = errors?.find((value) => value.type === errorType)

   return (
      <div className={`text-input ${errorFound ? "error" : ""}`}>
         <label htmlFor={id}>{label}</label>
         {inputType === "textarea" ? <textarea {...rest} rows="10" /> : <input {...rest} />}
         {errorFound && <p>{errorFound.msg}</p>}
      </div>
   )
}

export default TextInput
