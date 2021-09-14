
import './App.scss';
import Card from './components/Card/Card';
import team from "./data/team.js";

function App() {
  return (
    <div className="App">
      <div className="ticket-tracker">
        <h1>Ticket Tracker</h1>
        <Card dataArray={team} />
      </div>
    </div>
  );
}

export default App;
