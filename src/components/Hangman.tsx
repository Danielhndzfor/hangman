import { useState, useContext } from "react";
import "../css/hangman.css";
import { StatsContext } from "./StatsContext"; 
import Hangman1 from "../img/hangman1.png";
import Hangman2 from "../img/hangman2.png";
import Hangman3 from "../img/hangman3.png";
import Hangman4 from "../img/hangman4.png";
import Hangman5 from "../img/hangman5.png";
import Hangman6 from "../img/hangman6.png";
import Hangman7 from "../img/hangman.png";


interface HangmanProps {
    tecnologia: string;
    profesiones: string;
    paises: string;
    frutas: string;
}

const Hangman: React.FC<HangmanProps> = ({
    tecnologia,
    profesiones,
    paises,
    frutas,
}) => {
    const [selectedWord, setSelectedWord] = useState(tecnologia);
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
    const [errorCount, setErrorCount] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const { incrementWinCount, incrementLoseCount } = useContext(StatsContext); // Obtener las funciones del contexto

    const displayWord = selectedWord.split("").map((letter, index) => {
        if (guessedLetters.includes(letter)) {
            return letter;
        } else {
            return "_";
        }
    });

    const hangmanImages = [
        Hangman1,
        Hangman2,
        Hangman3,
        Hangman4,
        Hangman5,
        Hangman6,
        Hangman7,
    ];

    const handleGuess = () => {
        const letter = inputValue.toLowerCase();
        if (!guessedLetters.includes(letter)) {
            setGuessedLetters([...guessedLetters, letter]);
            if (!selectedWord.includes(letter)) {
                setErrorCount((prev) => prev + 1);
            }
        }
        setInputValue("");
    };

    const restartGame = () => {
        const categories = [tecnologia, profesiones, paises, frutas];
        const newWord = categories[Math.floor(Math.random() * categories.length)];
        setSelectedWord(newWord);
        setGuessedLetters([]);
        setErrorCount(0);

        // Actualizar los stats
        if (displayWord.join("") === selectedWord) {
            incrementWinCount(); // Incrementar el contador de juegos ganados
        } else {
            incrementLoseCount(); // Incrementar el contador de juegos perdidos
        }
    };

    const showLostMessage = () => {
        const correctLetters = selectedWord
            .split("")
            .filter((letter) => guessedLetters.includes(letter));
        const incorrectLetters = selectedWord
            .split("")
            .filter((letter) => !correctLetters.includes(letter));
        return (
            <>
                <p>La palabra correcta era: {selectedWord}</p>
                <p>No pudiste adivinar las siguientes letras: {incorrectLetters.join(", ")}</p>
            </>
        );
    };

    return (
        <div className="game">
            {errorCount > 5 && (
                <div className="errorContainer">
                    <p className="hangman-message">¡Perdiste!</p>
                    {showLostMessage()}
                </div>
            )}
            <div className="hangman-image">
                <img src={hangmanImages[errorCount]} alt="Hangman" />
            </div>
            <p className="hangman-word">{displayWord.join(" ")}</p>
            <div className="hangman-input-container">
                <input
                    className="hangman-input"
                    maxLength={1}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="hangman-button" onClick={handleGuess}>
                    Adivinar
                </button>
            </div>
            {(displayWord.join("") === selectedWord || errorCount > 5) && (
                <div>
                    <button className="hangman-button" onClick={restartGame}>
                        Select New Word
                    </button>
                </div>
            )}
            <p className="hangman-message">Cantidad de errores: {errorCount}</p>
            {displayWord.join("") === selectedWord && (
                <p className="hangman-message">¡Ganaste!</p>
            )}
            
        </div>
    );
};

export default Hangman;

