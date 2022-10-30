import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './page/Home';
import Search from './page/Search';
import Article from './page/Article';
import { AudioContextProvider } from './contexts/Audio';
import Layout from './Template/Layout';
import Genre from './components/contents/Genre';

function App() {

  return (
    <AudioContextProvider>
      <Layout>
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route path="/albums/:id" element={<Article />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/genres/:genre" element={<Genre />} />

          <Route path='*' element={<Home />} />
        </Routes>
      </Layout>
    </AudioContextProvider>
  );
}

export default App;