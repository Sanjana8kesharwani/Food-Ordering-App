// src/components/__tests__/RestaurantCard.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";

const mockRestaurant = {
  name: "Pizza Palace",
  cuisines: ["Italian", "Pizza"],
  avgRating: "4.5",
  sla: { slaString: "30 mins" },
  costForTwo: "₹400 for two",
  cloudinaryImageId: "sample-img-id",
};

describe("RestaurantCard Component", () => {
  test("should render restaurant details", () => {
    render(<RestaurantCard resData={mockRestaurant} />);

    expect(screen.getByText("Pizza Palace")).toBeInTheDocument();
    expect(screen.getByText(/Italian, Pizza/)).toBeInTheDocument();
    expect(screen.getByText(/4.5 ⭐ Stars/)).toBeInTheDocument();
    expect(screen.getByText(/30 mins ⏱/)).toBeInTheDocument();
    expect(screen.getByText(/₹400 for two/)).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", expect.stringContaining("sample-img-id"));
    expect(image).toHaveAttribute("alt", "res-logo");
  });

  test("should render 'No cuisines available' if cuisines are missing", () => {
    const mockNoCuisine = { ...mockRestaurant, cuisines: null };
    render(<RestaurantCard resData={mockNoCuisine} />);
    expect(screen.getByText("No cuisines available")).toBeInTheDocument();
  });

  test("should render promoted label when wrapped with HOC", () => {
    const PromotedCard = withPromotedLabel(RestaurantCard);
    render(<PromotedCard resData={mockRestaurant} />);
    expect(screen.getByText("Promoted")).toBeInTheDocument();
  });
});
