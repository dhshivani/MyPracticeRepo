import './App.css';
import CalculateScore from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore
        Name="Steve"
        School="DVM Public School"
        total={79}
        goal={90}
      />
    </div>
  );
}

export default App;
