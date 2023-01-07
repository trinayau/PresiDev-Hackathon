import {Routes, Route} from 'react-router-dom';
import {default as Layout} from './layouts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
