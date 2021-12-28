// React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const nameInputRef = useRef();

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const [enteredName, setEnteredName] = useState('');

  console.log(`Typed value: ${enteredName}`);

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value); 
  };

  // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
  const formSubmissionHandler = event => {
    event.preventDefault();
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

  return (
    // React-TypedInputTracking-SubmittedInputTracking-CleaningInputDataFromInput
    <form onSubmit={formSubmissionHandler}>
      <div className='form-control'>
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
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
