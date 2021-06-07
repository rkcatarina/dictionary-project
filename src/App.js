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
          <Dictionary defaultWord={"wine"} />
        </main>
        <footer className="App-footer">
          Coded by Catarina Redshaw Kranich and{" "}
          <a href="https://github.com/rkcatarina/dictionary-project">
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://zealous-pasteur-410dc8.netlify.app/">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
