import react from "react"
import reactDOM from "react-dom/client"
import App from "./App"

const div = document.getElementById("root") ;
const root = reactDOM.createRoot(div) ;

root.render(
  <strictMode>
  <App/>
  </strictMode>
)
