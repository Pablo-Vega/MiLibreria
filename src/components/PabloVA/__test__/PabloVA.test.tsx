import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import PabloVA from "../PabloVA";
describe("PabloVA rating", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<PabloVA defval = {3} precision = {0.5} maxrating = {10} color = 'primary' />);
        const rating = screen.getByLabelText("custom rating");
        expect(rating).toBeInTheDocument();
    });
});