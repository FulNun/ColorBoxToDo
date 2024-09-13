
import { render } from "@testing-library/react";
import Todo from "../components/Todo";

test("it renders without crashing", () => {
  render(<Todo task="Test Task" />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<Todo task="Test Task" />);
  expect(asFragment()).toMatchSnapshot();
});
