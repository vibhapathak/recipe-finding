import {BrowserRouter as Router, 
  Routes, 
  Route,
 
} from 'react-router-dom';
import Signup from "./Signup"
import MajorPage from "./majorpage"
import Nextpage from './Nextpage';
import React from "react";

function App() {
  return(
    <Router>
      <Routes>
        <Route path ="/signup" element = {<Signup/>}/>
        <Route path ="/majorpage" element = {<MajorPage/>}/>
        <Route path="/nextpage" element={<Nextpage />} />
      </Routes>
    </Router>
  ) 
}
export default App;
