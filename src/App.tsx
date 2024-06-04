import React, { useState, useEffect } from 'react';
import Hangman from './components/Hangman';
import Welcome from './components/Welcome';

// Define el tipo para las categorías y palabras
type WordCategories = {
    tecnologia: string[];
    profesiones: string[];
    paises: string[];
    frutas: string[];
};

const App: React.FC = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<keyof WordCategories>('');
    const [selectedCategoryWords, setSelectedCategoryWords] = useState<string[]>([]);

    const wordCategories: WordCategories = {
        tecnologia: [
            "computadora",
            "teléfono",
            "internet",
            "email",
            "software",
            "hardware",
            "redes",
            "programación",
            "aplicación",
            "pantalla"
        ],
        profesiones: [
            "médico",
            "ingeniero",
            "profesor",
            "policía",
            "bombero",
            "abogado",
            "chef",
            "escritor",
            "artista",
            "músico"
        ],
        paises: [
            "estados unidos",
            "china",
            "india",
            "brasil",
            "méxico",
            "japón",
            "rusia",
            "alemania",
            "francia",
            "reino unido"
        ],
        frutas: [
            "manzana",
            "plátano",
            "naranja",
            "uva",
            "fresa",
            "sandía",
            "piña",
            "kiwi",
            "limón",
            "pera"
        ]
    };

    useEffect(() => {
        const categories = Object.keys(wordCategories) as (keyof WordCategories)[];
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        setSelectedCategory(randomCategory);
        setSelectedCategoryWords(wordCategories[randomCategory]);
    }, []);

    const startGame = (category: keyof WordCategories) => {
        setSelectedCategory(category);
        setSelectedCategoryWords(wordCategories[category]);
        setGameStarted(true);
    };

    return (
        <div className="App">
            <div className="welcome">
                <Welcome category={selectedCategory} startGame={startGame} />
            </div>
            {gameStarted && (
                <Hangman words={selectedCategoryWords} />
            )}
        </div>
    );
};

export default App;




