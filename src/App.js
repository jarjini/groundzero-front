
import AddVillageLander from "./components/AddVillageLander";
import Lander from "./components/Lander";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Lander />} />
            <Route path='/add-village' element={<AddVillageLander />} />
        </Routes>
    </Router>
  );
}

export default App;
