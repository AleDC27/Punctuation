import viteLogo from '/vite.svg'
import './App.css'
import Punctuation from './pages/punctuation/Punctuation';
import "semantic-ui-css/semantic.min.css";
import { Route,Routes } from 'react-router-dom';
import ListFood from './pages/list/ListFood';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Punctuation/>} />
      <Route path='/listFood' element={<ListFood/>} />
    </Routes>
    </>
  )
}

export default App
