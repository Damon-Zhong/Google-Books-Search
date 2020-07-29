import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import SaveBook from './pages/savebook'
import SearchBook from './pages/searchbook'
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Header />
          {/* <Wrapper> */}
            <Route exact path="/" component={SaveBook} />
            <Route exact path="/savebook" component={SaveBook} />
            <Route path="/searchbook" component={SearchBook} />
          {/* </Wrapper> */}
          {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
