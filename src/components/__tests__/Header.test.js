// src/components/__tests__/Header.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";

// Helper to render Header with Redux + Router
const renderWithProviders = (ui) => {
  return render(
    <Provider store={appStore}>
      <BrowserRouter>{ui}</BrowserRouter>
    </Provider>
  );
};

describe("Header Component", () => {
  test("should render logo", () => {
    renderWithProviders(<Header />);
    const logo = screen.getByAltText(/burger logo/i);
    expect(logo).toBeInTheDocument();
  });

  test("should display navigation links", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Grocery")).toBeInTheDocument();
    expect(screen.getByText(/Cart \(0 items\)/i)).toBeInTheDocument();
  });

  test("should show cart empty message when cart is empty", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("Cart Empty")).toBeInTheDocument();
    expect(
      screen.getByText(/Good food is always cooking!/i)
    ).toBeInTheDocument();
  });

  test("should toggle login/logout button", () => {
    renderWithProviders(<Header />);
    const button = screen.getByRole("button", { name: /login/i });

    // Initially Login
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe("Login");

    // Click to toggle
    fireEvent.click(button);
    expect(button.textContent).toBe("Logout");

    // Click again to toggle back
    fireEvent.click(button);
    expect(button.textContent).toBe("Login");
  });
});
