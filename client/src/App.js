import './App.css';
import { Routes, Route } from "react-router-dom";

import Acceuil from './page/Acceuil';
import Recherche from './page/Recherche';
import Article from './page/Article';
import { AudioContextProvider } from './contexts/Audio';

function App() {

  return (
    <AudioContextProvider>
      <Routes>
        
        <Route exact path="/" element={<Acceuil />} />
        <Route path="/:id" element={<Article />} />
        <Route exact path="/recherche" element={<Recherche />} />
        <Route path='*' element={<Acceuil />} />
      </Routes>
    </AudioContextProvider>
  );
}

export default App;