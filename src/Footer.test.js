import { render} from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

test('Footer > renders in h1', () => {
    const { getByText } = render( <Footer/> );
    const contentH1 = getByText( /This is the Footer/);
    expect(contentH1).toHaveTextContent("This is the Footer");
});

