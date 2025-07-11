// src/components/__tests__/Cart.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../utils/cartSlice";

// Mock AddressModal
jest.mock("../AddressModal", () => () => <div data-testid="address-modal">Address Modal</div>);

// Utility to render with Redux provider
const renderWithRedux = (ui, { preloadedState, store = configureStore({ reducer: { cart: cartReducer }, preloadedState }) } = {}) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe("Cart Component", () => {
  test("should show empty cart message", () => {
    renderWithRedux(<Cart />, {
      preloadedState: { cart: { items: [] } },
    });

    expect(screen.getByText("Your cart is empty. Add something!")).toBeInTheDocument();
  });

  test("should show cart items and bill details", () => {
    const mockItem = {
      card: {
        info: {
          id: "1",
          name: "Paneer Tikka",
          price: 2500,
        },
      },
    };

    renderWithRedux(<Cart />, {
      preloadedState: {
        cart: {
          items: [mockItem],
        },
      },
    });

    expect(screen.getByText("Paneer Tikka")).toBeInTheDocument();
    expect(screen.getByText("₹25")).toBeInTheDocument(); // ₹2500/100
    expect(screen.getByText("Bill Details")).toBeInTheDocument();
    expect(screen.getByText("To Pay")).toBeInTheDocument();
  });

  test("should apply SAVE50 coupon and update discount", () => {
    const mockItem = {
      card: {
        info: {
          id: "1",
          name: "Burger",
          price: 10000,
        },
      },
    };

    renderWithRedux(<Cart />, {
      preloadedState: {
        cart: {
          items: [mockItem],
        },
      },
    });

    const input = screen.getByPlaceholderText("Enter coupon code");
    const button = screen.getByText("Apply");

    fireEvent.change(input, { target: { value: "SAVE50" } });
    fireEvent.click(button);

    expect(screen.getByText("-₹50")).toBeInTheDocument();
  });

  test("should open Address Modal on clicking ADD NEW", () => {
    renderWithRedux(<Cart />, {
      preloadedState: { cart: { items: [] } },
    });

    const addButton = screen.getByText("ADD NEW");
    fireEvent.click(addButton);

    expect(screen.getByTestId("address-modal")).toBeInTheDocument();
  });
});
