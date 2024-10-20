import Coming from "./Component/coming/Coming";
import Header from "./Component/headers/Header";
import Home from "./Component/home/Home";
import Movie from "./Component/movie/Movie";
 //j'ai importé le fichier css de swiper pour l'utiliser dans tout mon app
 import 'swiper/css'
import NewsLetter from "./Component/newsletter/NewsLetter";
import Footer from "./Component/footer/Footer";


function App() {
  return (
    <div className='' >
          <Header/>
          <Home/>
          <Movie/>
          <Coming/>
          <NewsLetter/>
          <Footer/>
    </div>
  )
}


export default App;