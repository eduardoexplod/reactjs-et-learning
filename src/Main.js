import restaurant from "./assets/images/restaurant.jpg";
import React, { useState, useEffect, useReducer } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const dishes = ["Carne en verde", "Tostadas de tinga", "Quesadillas de Hongos"];
const dishesObj = dishes.map((dish, i) => ({
    id: i,
    title: dish,
}));

// props.name es igual a {name}
function Header({ name }) {
    return (
        <header>
            <h1>{name}s Page</h1>
        </header>
    );
}

function Section(props) {
    return (
        <section>
            <p>Este es un mensaje: {props.message}</p>
            <ul>
                {props.dishes.map((dish) => (
                    <li key={dish.id}> {dish.title} </li>
                ))}
            </ul>
            <img src={restaurant} height={200} alt="Restaurant" />
        </section>
    );
}
function GitHub({ login }) {
    const [dataGH, setDataGH] = useState(null);
    const [loadingGH, setLoadingGH] = useState(null);
    const [errorGH, setErrorGH] = useState(null);

    useEffect(() => {
        if (!login) {
            return;
        }
        setLoadingGH(true);

        fetch(`https://api.github.com/users/${login}`)
            .then((response) => response.json())
            .then(setDataGH)
            .then(() => setLoadingGH(false))
            .catch(setErrorGH);
    }, [login]);

    if (loadingGH) {
        return <div>Loading...</div>;
    }
    if (errorGH) {
        return <pre>{JSON.stringify(errorGH, null, 2)}</pre>;
    }
    if (!dataGH) {
        return null;
    }

    return (
        <div>
            <h1>{dataGH.name}</h1>
            <h2>{dataGH.location}</h2>
            <img height={100} alt={dataGH.name} src={dataGH.avatar_url} />
        </div>
    );
}

export function Main() {
    // useState
    const [strEmotion, setEmotion] = useState("Happy");
    const [strSecondary, setSecondary] = useState("Cold");
    // Reducer
    const [chkBox, fnChangeChkBox] = useReducer((chkBox) => !chkBox, false);

    useEffect(() => {
        console.log(`this the effect emotion:  ${strEmotion}`);
    }, [strEmotion]);

    useEffect(() => {
        console.log(`this the effect secondary:  ${strSecondary}`);
    }, [strSecondary]);

    return (
        <div className="App">
            <nav>
                <Link to="about">
                    About
                </Link>
                <br/>
                <Link to="contact">
                    Contact
                </Link>
                <br/>
                <Link to="events">
                    Events
                </Link>
            </nav>

            <label htmlFor="chkTest">{chkBox ? "Check" : "Not checked"}</label>
            <input
                id="chkTest"
                type="checkbox"
                value={chkBox}
                onChange={fnChangeChkBox}
            />

            <h1>This the emotion: {strEmotion}</h1>
            <h1>This the secondary: {strSecondary}</h1>
            <button onClick={() => setEmotion("Frustrate")}>Frustrate</button>
            <button onClick={() => setEmotion("Happy")}>Happy</button>
            <button onClick={() => setSecondary("Hot")}>Hot</button>
            <button onClick={() => setSecondary("Cold")}>Cold</button>
            <Header name="Lalo" />
            <Section message="Hola Mundo" dishes={dishesObj} />
            <GitHub login="eduardoexplod" />
            <Footer year={new Date().getFullYear()} />
        </div>
    );
}
