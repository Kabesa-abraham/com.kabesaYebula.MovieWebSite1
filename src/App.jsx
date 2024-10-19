import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Component/headers/Header";
import Home from "./Component/home/Home";

function App() {
  return (
    <div className='' >
      <BrowserRouter>
          <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;