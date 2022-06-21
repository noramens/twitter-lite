import Home from './components/Home';
import Profile from './components/Profile';
import SideNav from './components/SideNav';
import { Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div style={{ display: 'flex', width: '70%', margin: 'auto' }}>
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
