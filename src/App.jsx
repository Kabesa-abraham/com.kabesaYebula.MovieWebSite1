import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Component/headers/Header";

function App() {
  return (
    <div className='body' >
      <BrowserRouter>
          <Header/>
        <Routes>

        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;