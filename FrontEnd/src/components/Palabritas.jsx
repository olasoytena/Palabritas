import { useState } from "react";
import "../css/Palabritas.css";

export const Palabritas = () => {
    const [grid, setGrid] = useState(Array(25).fill(""));

    const handleChange = (index, event) => {
        const newGrid = [...grid];
        newGrid[index] = event.target.value.toUpperCase().slice(0, 1); // Solo permite una letra
        setGrid(newGrid);
    };

    const handleConfirm = () => {
        console.log("Letras confirmadas:", grid);
    };

    return (
        <div className="container">
            <h1>Palabritas</h1>
            <div className="grid">
                {grid.map((letter, i) => (
                    <input
                        key={i}
                        type="text"
                        className="cell"
                        value={letter}
                        onChange={(e) => handleChange(i, e)}
                        maxLength="1"
                    />
                ))}
            </div>
            <button className="confirm-button" onClick={handleConfirm}>
                Confirmar
            </button>
        </div>
    );
};
