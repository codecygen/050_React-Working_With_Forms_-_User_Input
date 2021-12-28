// React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const nameInputRef = useRef();

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const [enteredName, setEnteredName] = useState('');

  // React-FormSubmissionValidationFeedbackUserExperience
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  console.log(`Typed value: ${enteredName}`);

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value); 
  };

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const formSubmissionHandler = event => {
    event.preventDefault();

    // React-FormSubmissionValidationFeedbackUserExperience
    if (enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    };

    // React-FormSubmissionValidationFeedbackUserExperience
    setEnteredNameIsValid(true);

    const enteredValue = nameInputRef.current.value;

    console.log(`This is the submitted value: ${enteredValue}`);

    // This is used to control the "value" key of input
    // So once you submit the form, the input value will be cleaned.
    setEnteredName('');

    // This can also be used, but not recommended
    // Because this is about manipulating the DOM.
    // In React, you should let hooks handle the states.
    // nameInputRef.current.value = '';
  }

  // React-FormSubmissionValidationFeedbackUserExperience
  const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  return (
    // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
    <form onSubmit={formSubmissionHandler}>
      {/* React-FormSubmissionValidationFeedbackUserExperience */}
      {/* The nameInputClasses will highlight the input element */}
      {/* If the input is not valid */}
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
          // "ref" key is used by UseRef
          ref={nameInputRef}
          type='text' 
          id='name' 
          // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
          // onChange key is used by handling instant typing
          onChange={nameInputChangeHandler} 
          // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
          // value key is used to control the final input value
          // With the help of it, you have a controlled input
          value={enteredName}
        />
        {/* React-FormSubmissionValidationFeedbackUserExperience */}
        {!enteredNameIsValid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
