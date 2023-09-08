import "./App.css";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div>
        <a href=".">
          <img
            src="https://res.cloudinary.com/dnxa7tvty/image/upload/v1694199691/portfolio/lofi-cutout-logo.png"
            className="logo"
            alt="Matt Polky listening to some tunes while programming"
          />
        </a>
      </div>
      <h3>Hi! I'm Matt Polky</h3>
      <p>
        I'm a Full Stack Engineer based in Chicago. <br />
        Please feel free to reach out with any questions, thanks!
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() =>
            window.open(
              "https://docs.google.com/document/d/e/2PACX-1vTW9Uo2ktBkN0H9mqwtwn2O839pzZOlN1Gx0ANcW3v73zNJaXoEsTR10DMuRxkVTUxnnIOCgHeBjeHt/pub",
              "_blank"
            )
          }
        >
          Resume
        </button>
        <button
          onClick={() =>
            window.open(
              "mailto:mdpolky@gmail.com?subject=Developer%20Inquiry",
              "_blank"
            )
          }
        >
          Contact
        </button>
      </div>
      <h3>My Journey</h3>
      <Timeline />
    </>
  );
}

export default App;
