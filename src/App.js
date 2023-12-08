// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AcademicsPage from './pages/AcademicsPage';
// import EventsPage from './pages/EventsPage';
import FoodPage from './pages/FoodPage';
import TransportationPage from './pages/TransportationPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/academics" component={AcademicsPage} />
        {/* <Route path="/events" component={EventsPage} /> */}
        <Route path="/food" component={FoodPage} />
        <Route path="/transportation" component={TransportationPage} />
        <Route path="/about" component={AboutPage} />
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
