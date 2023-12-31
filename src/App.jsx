import viteLogo from '/vite.svg'
import Punctuation from './pages/punctuation/Punctuation';
import "semantic-ui-css/semantic.min.css";
import { Route,Routes } from 'react-router-dom';
import ListFood from './pages/list/ListFood';
import Home from './pages/home/Home';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/punctuation' element={<Punctuation/>} />
      <Route path='/listFood' element={<ListFood/>} />
    </Routes>
    </>
  )
}

export default App
