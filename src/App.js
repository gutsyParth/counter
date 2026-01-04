import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4 text-center" style={{ width: "22rem" }}>
        <h1 className="mb-3 fw-bold">Counter</h1>

        <p className="display-4 fw-semibold text-primary mb-4">{count}</p>

        <div className="d-flex justify-content-between gap-2">
          <button
            className="btn btn-success flex-fill"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            className="btn btn-danger flex-fill"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
        </div>

        <button
          className="btn btn-outline-secondary mt-3"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
