import React, { useState, useEffect } from 'react';
import hangman from '../img/hangman.png';
import '../css/welcome.css';

interface WelcomeProps {
    category: string;
    startGame: (category: string) => void;
}

const Welcome: React.FC<WelcomeProps> = ({ category, startGame }) => {
    const [count, setCount] = useState(0); // Estado para el temporizador
    const [showContent, setShowContent] = useState(true);
    const [showButton, setShowButton] = useState(true);

    const getCategoryHint = (category: string) => {
        switch (category) {
            case 'tecnologia':
                return 'Pista: Descubre palabras relacionadas con la tecnología.';
            case 'profesiones':
                return 'Pista: Encuentra nombres de diferentes profesiones y ocupaciones.';
            case 'paises':
                return 'Pista: Descubre nombres de países de todo el mundo.';
            case 'frutas':
                return 'Pista: Encuentra nombres de deliciosas frutas.';
            default:
                return '';
        }

    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handlePlayClick = () => {
        setShowContent(false); // Ocultar el contenido al hacer clic en Play
        setShowButton(false); // Ocultar el botón al hacer clic en Play
        startGame(category); // Iniciar el juego
    };

    return (
        <div className="index">

            <div className="container">
                <div className="wrapper">
                    <h1>Welcome to Hangman game</h1>
                    {showContent && (
                        <div>
                            <h2>Classical Game</h2>
                            <img className="logo" src={hangman} alt="hangman" />
                        </div>
                    )}
                    <p>{getCategoryHint(category)}</p>
                    <p>Elapsed time: {count} seconds</p>
                    {showButton && (
                        <button className="button_slide slide_left" onClick={handlePlayClick}>Play</button>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Welcome;





