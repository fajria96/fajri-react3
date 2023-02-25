import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./styles/News.css";
import Navigationbar from "./components/news-api/Navigationbar";
import Footer from "./components/news-api/Footer";
import News from "./components/news-api/News"

function App() {
  return (
    <div className="container-fluid">
      <Navigationbar/>
      <News />
      <Footer />
    </div>
  );
}

export default App