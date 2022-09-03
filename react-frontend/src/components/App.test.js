import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import App from "./App";

// <https://reactjs.org/docs/testing-recipes.html>
// <https://create-react-app.dev/docs/running-tests/#testing-components>

// isolates each test by setting up before and cleaning up after
let container = null;

beforeEach(() => {
  // setup a DOM element as the test's render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// basic "smoke test"
it("renders without crashing", () => {
  render(<App />, container);
});
