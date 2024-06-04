import React, { useState, useEffect } from 'react';
import Hangman from './components/Hangman';
import Welcome from './components/Welcome';


const App: React.FC = () => {
    const [gameStarted, setGameStarted] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCategoryWords, setSelectedCategoryWords] = useState<string[]>([]);

    const wordCategories = {
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
        const categories = Object.keys(wordCategories);
        const randomCategory = categories[Math.floor(Math.random() * categories.length)];
        setSelectedCategory(randomCategory);
        setSelectedCategoryWords(wordCategories[randomCategory]);
    }, []);

    const startGame = (category: string) => {
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
                <Hangman
                    tecnologia={selectedCategoryWords[0]}
                    profesiones={selectedCategoryWords[1]}
                    paises={selectedCategoryWords[2]}
                    frutas={selectedCategoryWords[3]}
                />
            )}
        </div>
    );
};

export default App;



