import React from "react";
import { render,screen,fireEvent } from "@testing-library/react";
import SearchBox from "../SearchBox"

describe('SearchBox Component', () => {
    it("should render value in input", () => {
     render(<SearchBox/>);
     const inputElement = screen.getAllByPlaceholderText("Type to search...");
    //  console.log(inputElement)
    fireEvent.change(inputElement, {target: {value:"Super Man"}})
    expect(inputElement.value).toBe("Super Man")
     
    
    })
})