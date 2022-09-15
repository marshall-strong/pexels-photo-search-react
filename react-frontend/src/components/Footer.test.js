import React from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Footer";

// <https://reactjs.org/docs/testing-recipes.html>
// <https://create-react-app.dev/docs/running-tests/#testing-components>

// isolates tests by setting up before and cleaning up after each test
let container = null;
let root = null;

beforeEach(() => {
  // setup a DOM element as the test's render target
  container = document.createElement("div");
  root = createRoot(container);
});

afterEach(() => {
  root.unmount();
  root = null;
  container.remove();
  container = null;
});

// basic "smoke test"
it("renders without crashing", () => {
  root.render(<Footer />);
});
