import './assets/CSS/Main.css'
import Navbar from './components/Navbar/Navbar'
import ChartBar from './components/ChartBar/ChartBar'
import Article from './components/Article/Article'
import ImgCards from './components/ImgCards/ImgCards'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChartBar />
      <Article />
      <ImgCards />
      <Footer />
    </div>
  )
}

export default App
