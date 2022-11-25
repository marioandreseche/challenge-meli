import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./App.scss";
import Home from './page/Home';

function App() {
  return (
    <>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
