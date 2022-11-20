import { Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar/sidebar.component';
import FullUser from './components/user-details/user-details.component';
import FullPost from './components/post-details/post-details.component';
import HomePage from './pages/homepage/homepage.component';
import UsersPage from './pages/userspage/userspage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';

import './App.scss';
import './styles/_typography.scss';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 style={{ fontSize: "32px", textAlign: "center" }}>ReactJS Midterm 1</h1>
      </div>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/users" element={<UsersPage />} />
          <Route exact path="/users/:id" element={<FullUser />} />
          <Route exact path="/posts/:id" element={<FullPost />} />
          <Route exact path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
