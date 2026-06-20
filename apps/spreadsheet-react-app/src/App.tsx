import { createWorkbook, getCellValue, setCellValue } from "spreadsheet-core";
import "./App.css";

const workbook = setCellValue(
  createWorkbook("Forecast"),
  "Forecast",
  "A1",
  "Ready",
);

function App() {
  const status = getCellValue(workbook, "Forecast", "A1") ?? "Empty";

  return (
    <main className="app-shell">
      <section className="hero-card">
        <p className="eyebrow">Spreadsheet React App</p>
        <h1>Workspace dependency wired successfully.</h1>
        <p>
          This Vite + React app reads a workbook value from the local
          <code> spreadsheet-core </code> package.
        </p>
        <div className="cell-preview">
          <span>Forecast!A1</span>
          <strong>{status}</strong>
        </div>
      </section>
    </main>
  );
}

export default App;
