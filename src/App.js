import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>What do you want to look up?</strong>
        </header>
        <main>
          <Dictionary defaultWord={"wine"}/>
        </main>
        <footer className="App-footer">
          Coded by Catarina Redshaw Kranich
        </footer>
      </div>
    </div>
  );
}

export default App;
