import { render, fireEvent } from "@testing-library/react";
import Todo from "../todo";

describe(Todo, () => {
  it("counter displays correct inital count", () => {
    const { getByTestId } = render(<Todo initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("count should increase by 1 if increment button is click", () => {
    const { getByTestId, getByRole } = render(<Todo initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });
    fireEvent.click(incrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("count should decrease by 1 if decrement button is click", () => {
    const { getByTestId, getByRole } = render(<Todo initialCount={0} />);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    fireEvent.click(decrementBtn);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });
});
