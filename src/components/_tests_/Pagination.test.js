import React from "react";
import Pagination from "../Pagination";
import { render , screen, fireEvent } from "@testing-library/react";

describe("Pagination Component", () => {
it("should render movie component", () => {
 render (<Pagination
 />);
 const pages = screen.findAllByRole(moviesPerPage)
//  console.log(pages);
fireEvent.click(pages);
//  screen.debug();
})
})