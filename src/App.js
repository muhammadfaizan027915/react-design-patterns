import { useState } from "react";
import "./App.css";
import ControlledForm from "./Components/Controlled Components/ControlledForm";
import ControlledOnboarding from "./Components/Controlled Components/ControlledOnboarding";

const Step1 = ({ back, next }) => {
  return (
    <>
      <h1>Step 1</h1>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
};

const Step2 = ({ back, next }) => {
  return (
    <>
      <h1>Step 2</h1>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
};

const Step3 = ({ back, next }) => {
  return (
    <>
      <h1>Step 3</h1>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
};

const Step4 = ({ back, next }) => {
  return (
    <>
      <h1>Step 4</h1>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
};

function App() {
  const [step, setStep] = useState(0);

  const back = () => {
    const back = step - 1;
    if (back >= 0) setStep(back);
  };

  const next = () => {
    setStep((step) => step + 1);
  };

  return (
    <ControlledOnboarding step={step} back={back} next={next}>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </ControlledOnboarding>
  );
}

export default App;
