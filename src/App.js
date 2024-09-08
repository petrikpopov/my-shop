import './App.css';
import Header from './components/header';
import ReactDOM from "react-dom/client";
import HomePage from './components/home';

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
     <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
