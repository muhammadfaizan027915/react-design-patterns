import "./App.css";
import HOCWithDataLoading from "./Components/Higher Order Components/HOC with Data Loading";

function App() {
  const User = HOCWithDataLoading( ({index, title, body}) => {
    return (
      <>
        <small>{index}</small>
        <h5>{title}</h5>
        <p>{body}</p>
      </>
    )
  } ,"https://jsonplaceholder.typicode.com/posts/1")

  return <User index = "1"/>
}

export default App;
