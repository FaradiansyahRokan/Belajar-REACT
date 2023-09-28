import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='*' exact Component={NotFound} />
      <Route path='/' exact Component={Join} />
      <Route path='/chat' exact Component={Chat} />
    </Routes>
   </Router>
  );
}

export default App;
