import React from "react";

function Footer(props) {
    return (
        <footer>
            <h1>This is the Footer</h1>
            <h2>Year {props.year}</h2>
        </footer>
    );
}
export default Footer;
