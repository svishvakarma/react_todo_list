import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/home' element={<Home />}> </Route>
     </Routes>
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
