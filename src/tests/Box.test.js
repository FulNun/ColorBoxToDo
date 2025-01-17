
import { render } from "@testing-library/react";
import Box from "../components/Box";

test("it renders without crashing", () => {
  render(<Box width={100} height={100} backgroundColor="red" />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Box width={100} height={100} backgroundColor="red" />);
  expect(asFragment()).toMatchSnapshot();
});
