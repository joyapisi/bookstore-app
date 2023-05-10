import { Routes, Route } from 'react-router-dom';
import Categories from './components/Categories';
import Books from './components/ListofBooks';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
