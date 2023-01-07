import {Routes, Route} from 'react-router-dom';
import {default as Layout} from './layouts';
import { HomePage } from './pages';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route path="/" element={<HomePage />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
