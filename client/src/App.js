import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Acceuil from './page/Acceuil';
import Recherche from './page/Recherche';
import Article from './page/Article';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/:id" element={<Article />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path='*' element={<Acceuil />} />
      </Routes>
    </BrowserRouter>
    // <div className="App container">
    //   <Header />
    //   <Main />
    //   <Footer />
    // </div>
  );
}

export default App;