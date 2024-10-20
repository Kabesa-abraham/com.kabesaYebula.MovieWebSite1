
import Header from "./Component/headers/Header";
import Home from "./Component/home/Home";
import Movie from "./Component/movie/Movie";
 //j'ai importé le fichier css de swiper pour l'utiliser dans tout mon app
 import 'swiper/css'


function App() {
  return (
    <div className='' >
          <Header/>
          <Home/>
          <Movie/>
    </div>
  )
}


export default App;