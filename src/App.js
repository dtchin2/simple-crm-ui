import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <h1>Simple CRM System</h1>
      <Dashboard />
    </div>
  );
}

export default App;
