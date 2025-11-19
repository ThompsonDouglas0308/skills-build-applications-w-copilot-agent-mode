
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className={`container mt-4${darkMode ? ' dark-mode' : ''}`}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4 rounded">
          <Link className="navbar-brand text-white d-flex align-items-center" to="/">
            <img src={logo} alt="OctoFit Logo" className="octofit-logo" />
            OctoFit Tracker
          </Link>
          <button className="btn btn-outline-light ms-3" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link text-white" to="/activities">Activities</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/teams">Teams</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/users">Users</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/workouts">Workouts</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/register">Register</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="/profile">Profile</Link></li>
            </ul>
          </div>
        </nav>
        <div className="card shadow mb-4">
          <div className="card-body">
            <Routes>
              <Route path="/activities" element={<Activities />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/users" element={<Users />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<h2 className="display-5 text-center">Welcome to <span className="text-primary">OctoFit Tracker</span>!</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
