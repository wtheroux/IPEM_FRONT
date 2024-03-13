import React from "react"
import ReactDOM from "react-dom/client"
//import App from 'app'

const App = () => {
  return <div>Hello vacation</div>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root")!
)
root.render(<App />);

export default App