// src/components/__tests__/Contact.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Page", () => {
  test("should render main heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: /contact us/i });
    expect(heading).toBeInTheDocument();
  });

  test("should render contact description", () => {
    render(<Contact />);
    expect(
      screen.getByText(/we're always here to assist you/i)
    ).toBeInTheDocument();
  });

  test("should render address, phone, email and delivery sections", () => {
    render(<Contact />);
    expect(screen.getByText(/123, foodie street/i)).toBeInTheDocument();
    expect(screen.getByText(/\+91 98765 43210/i)).toBeInTheDocument();
    expect(screen.getByText(/support@foodbite.com/i)).toBeInTheDocument();
    expect(
      screen.getByText(/need help with a delivery/i)
    ).toBeInTheDocument();
  });

  test("should render closing line", () => {
    render(<Contact />);
    expect(screen.getByText(/food delivery 🇮🇳/i)).toBeInTheDocument();
  });

  test("should render all headings (1 h1 + 4 h3s)", () => {
    render(<Contact />);
    const allHeadings = screen.getAllByRole("heading");
    expect(allHeadings.length).toBe(5); // 1 main + 4 sub
  });
});

