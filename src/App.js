import React from "react";
import { Routes, Route } from "react-router-dom";
import {
    Events,
    About,
    Contact,
    Whoops404,
    LocationCompany,
    HistoryCompany,
} from "./Pages";
import { Main } from "./Main";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/events" element={<Events />} />
                <Route path="/about" element={<About />}>
                    <Route path="location" element={<LocationCompany />} />
                    <Route path="history" element={<HistoryCompany />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Whoops404 />} />
            </Routes>
        </div>
    );
}

export default App;
