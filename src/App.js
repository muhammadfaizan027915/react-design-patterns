import "./App.css";
import ControlledForm from "./Components/Controlled Components/ControlledForm";
import UnControlledOnboarding from "./Components/Uncontrolled Components/UnControlledOnboarding";

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
  return (
    <UnControlledOnboarding>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
    </UnControlledOnboarding>
  );
}

export default App;
