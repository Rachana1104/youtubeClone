import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Videos from './components/Videos';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App_page">
        <SideBar/>
        <Videos/>
      </div>
    </div>
  );
}

export default App;
