import { useState } from "react";
import "../css/Palabritas.css";

export const Palabritas = () => {
    const [isDifficult, setIsDifficult] = useState(false);
    const [grid, setGrid] = useState(Array(25).fill(""));
    const [isAnimating, setIsAnimating] = useState(false); // Estado para controlar la animación

    const handleChange = (index, event) => {
        const newGrid = [...grid];
        newGrid[index] = event.target.value.toUpperCase().slice(0, 1);
        setGrid(newGrid);
    };

    const handleConfirm = () => {
        console.log("Letras confirmadas:", grid);
    };

    const handleDifficult = () => {
        setIsAnimating(true); // Activa la animación
        setTimeout(() => {
            const newSize = isDifficult ? 25 : 49;
            setGrid(Array(newSize).fill(""));
            setIsDifficult(!isDifficult);
            setIsAnimating(false); // Desactiva la animación después de cambiar el grid
        }, 500); // Duración de la animación (0.5 segundos)
    };

    return (
        <div className="container">
            <h1>Palabritas</h1>
            <div className={`grid ${isDifficult ? "grid-7x7" : "grid-5x5"} ${isAnimating ? "animate" : ""}`}>
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
            <div className={`button-container ${isAnimating ? "animate" : ""}`}>
                <button className="confirm-button" onClick={handleConfirm}>
                    Enviar
                </button>
                <button className="difficult-button" onClick={handleDifficult}>
                    {isDifficult ? "Fácil" : "Difícil"}
                </button>
            </div>
        </div>
    );
};