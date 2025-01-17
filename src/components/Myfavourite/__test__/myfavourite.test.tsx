import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Myfavourite from "../MyFavourite"; 
describe("CustomButton component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<Myfavourite color={"primary"}  />);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
});