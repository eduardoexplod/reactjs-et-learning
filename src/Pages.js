import React from "react";
import {  Outlet, useLocation} from "react-router-dom"; 

export function Whoops404() {
    let location = useLocation();
    return (
        <div>
            <h1>{ location.pathname }: Page not found 404 </h1>
        </div>
    );
}
export function About() {
    return (
        <div>
            <h1>[About]</h1>
            <Outlet/>
        </div>
    );
}
export function LocationCompany() {
    return (
        <div>
            <h1> Location Company </h1>
        </div>
    );
}
export function HistoryCompany() {
    return (
        <div>
            <h1>History Company </h1>
        </div>
    );
}
export function Events() {
    return (
        <div>
            <h1>[Events]</h1>
        </div>
    );
}
export function Contact() {
    return (
        <div>
            <h1>[Contact]</h1>
        </div>
    );
}
