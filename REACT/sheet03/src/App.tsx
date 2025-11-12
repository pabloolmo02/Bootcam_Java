// App.tsx
import { useEffect, useId, useState } from "react";
import "./App.css";
import Ex01 from "./exercises/ex01/Ex01";
import Ex02 from "./exercises/ex02/Ex02";
import Ex03 from "./exercises/ex03/Ex03";

// Tipos exportados
export type Level = "basic" | "advanced";
type ExerciseComponent = React.ComponentType<{ nivel: Level }>;

// Registros estáticos
const EXERCISES = {
  1: Ex01,
  2: Ex02,
  3: Ex03,
} as const satisfies Record<number, ExerciseComponent>;

const LEVELS: readonly Level[] = ["basic", "advanced"];

export default function App() {
  const [exId, setExId] = useState<number | null>(null);
  const [level, setLevel] = useState<Level>("basic");

  const baseId = useId();
  const exerciseIds = Object.keys(EXERCISES).map(Number);

  // Resetea si el ejercicio ya no existe
  useEffect(() => {
    if (exId != null && !(exId in EXERCISES)) {
      setExId(null);
    }
  }, [exId]);

  const Selected = exId != null ? EXERCISES[exId] : undefined;

  return (
    <div className="app-container">
      <h1>SHEET 03 - Ejercicios React</h1>

      {/* Tabs de ejercicios */}
      <div
        role="tablist"
        aria-label="Ejercicios"
        className="exercises"
      >
        {exerciseIds.map((id) => {
          const selected = exId === id;
          const tabId = `${baseId}-tab-ex-${id}`;
          const panelId = `${baseId}-panel-ex-${id}`;
          return (
            <button
              key={id}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={panelId}
              tabIndex={selected ? 0 : -1}
              className={selected ? "active" : undefined}
              onClick={() => setExId(id)}
            >
              {`ex${String(id).padStart(2, "0")}`}
            </button>
          );
        })}
      </div>

      {/* Selector de nivel */}
      <fieldset className="levels">
        <legend>Nivel de dificultad</legend>
        {LEVELS.map((lvl) => (
          <label key={lvl}>
            <input
              type="radio"
              name="level"
              value={lvl}
              checked={level === lvl}
              onChange={() => setLevel(lvl)}
            />
            <span className="level-label">{lvl}</span>
          </label>
        ))}
      </fieldset>

      {/* Panel del ejercicio */}
      <main
        role="tabpanel"
        id={exId != null ? `${baseId}-panel-ex-${exId}` : undefined}
        aria-labelledby={exId != null ? `${baseId}-tab-ex-${exId}` : undefined}
        className="exercise-container"
      >
        {Selected ? (
          <Selected nivel={level} />
        ) : (
          <div className="placeholder">
            <p>👆 Selecciona un ejercicio para comenzar</p>
          </div>
        )}
      </main>
    </div>
  );
}
