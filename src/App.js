import ExampleMarkdown from "./components/ExampleMarkdown";
import ShowMarkdown from "./components/ShowMarkdown";
import WriteMarkdown from "./components/WriteMarkdown";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <ExampleMarkdown/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-between" style={{height:"75vh"}}>
          <ShowMarkdown/>
          <WriteMarkdown/>
        </div>
      </div>
    </div>
  );
}

export default App;
