// React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
import { useEffect, useState } from 'react';

// React-useRef
// import { useRef } from 'react';

const SimpleInput = (props) => {
  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  // React-useRef
  // It is commented out because we dont use it in this project.
  // const nameInputRef = useRef();

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const [enteredName, setEnteredName] = useState('');



  // React-FormSubmissionValidationFeedbackUserExperience
  // We set this false initially, because it is actually false.
  // In order not to show the error messages, we can set this to true
  // but it will be like cheating. If we want to use this value for
  // useEffect hook, then since in case we would initially set it to true
  // some problems may occur.
  // In order to prevent this, we will initially set it to false but we will
  // add more hooks.
  // Here this section will be commented out to make a leaner code.
  // We do not really need a hook for "enteredNameIsValid" because 
  // this section is something that we can simply drive by using the "enteredName"
  // state.
  // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  
  // Instead use this:
  const enteredNameisValid = enteredName.trim() !== '';



  // React-Secondary_State_To_Avoid_Workaround_For_Initially_Setting_enteredNameIsValid_To_True
  // Here, we also introduce, touched state. Both enteredNameIsValid and enteredNameIsTouched
  // will be evaluated before the app makes a decision if the submitted form is valid
  // or invalid.
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  // React-Secondary_State_To_Avoid_Workaround_For_Initially_Setting_enteredNameIsValid_To_True
  // useEffect might be needed at the beginning of the form submmission. 
  // We want to ensure that enteredNameIsValid is false at the beginning. Because it is
  // false.
  useEffect(() => {
    if(enteredNameIsValid) {
      console.log('Entered name is valid!');
    }
  }, [enteredNameIsValid]);

  console.log(`Typed value: ${enteredName}`);

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  // React-onChange
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value); 

    // React-FormSubmissionValidationFeedbackUserExperience
    // Here we get the value from "event.target.value" instead
    // of "enteredName" as this state will show the old state
    // and not updated one due to the fact that updating latest state
    // only occurs in next re-rendering or re-evaluation of the 
    // "SimpleInput.js"
    if (event.target.value.trim() !== '') {
      setEnteredNameIsValid(true);
    };
  };

  // React-onBlur
  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);

    // React-FormSubmissionValidationFeedbackUserExperience
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    };
  };

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  // React-onSubmit
  const formSubmissionHandler = event => {
    event.preventDefault();

    // React-Secondary_State_To_Avoid_Workaround_For_Initially_Setting_enteredNameIsValid_To_True
    setEnteredNameTouched(true);

    // React-FormSubmissionValidationFeedbackUserExperience
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
    };

    // React-FormSubmissionValidationFeedbackUserExperience
    setEnteredNameIsValid(true);


    // React-useRef
    // It is commented out because we dont use it in this project.
    // const enteredValue = nameInputRef.current.value;
    // console.log(`This is the submitted value: ${enteredValue}`);

    // This is used to control the "value" key of input
    // So once you submit the form, the input value will be cleaned.
    setEnteredName('');

    // This can also be used, but not recommended
    // Because this is about manipulating the DOM.
    // In React, you should let hooks handle the states.
    // nameInputRef.current.value = '';
  }

  // React-Secondary_State_To_Avoid_Workaround_For_Initially_Setting_enteredNameIsValid_To_True
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  // React-FormSubmissionValidationFeedbackUserExperience
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
    // React-onSubmit
    <form onSubmit={formSubmissionHandler}>
      {/* React-FormSubmissionValidationFeedbackUserExperience */}
      {/* The nameInputClasses will highlight the input element */}
      {/* If the input is not valid */}
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input


          // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
          // "ref" key is used by UseRef
          // React-useRef
          // It is commented out because we dont use it in this project.
          // ref={nameInputRef}



          type='text' 
          id='name' 
          // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
          // onChange key is used by handling instant typing
          // React-onChange
          onChange={nameInputChangeHandler} 
          // React-onBlur
          onBlur={nameInputBlurHandler}
          // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
          // value key is used to control the final input value
          // With the help of it, you have a controlled input
          value={enteredName}
        />
        {/* React-FormSubmissionValidationFeedbackUserExperience */}
        {/* React-Secondary_State_To_Avoid_Workaround_For_Initially_Setting_enteredNameIsValid_To_True */}
        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
