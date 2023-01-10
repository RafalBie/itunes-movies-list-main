import React from "react";
import MovieList from "../MovieList";
import { render , screen } from "@testing-library/react";

describe("MovieList Component", () => {
it("should render movie component", () => {
 render (<MovieList
 label = "https://itunes.apple.com/us/movie/the-batman/id1606824145?uo=2"
 />);
 const movieElement = screen.getAllByTestId("index");
 console.log(movieElement);

//  screen.debug();
})
})