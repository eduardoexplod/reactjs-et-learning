import { render, fireEvent} from "@testing-library/react";
import React from "react";
import Footer from "./App";

test('App > Selecting Checkbox', () => {
    const { getByLabelText } = render( <Footer/> );
    const checkBox = getByLabelText( /Not checked/);
    fireEvent.click(checkBox);
    expect(checkBox.checked).toEqual(true);
});

