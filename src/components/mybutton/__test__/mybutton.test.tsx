//import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react"; 
import '@testing-library/jest-dom'; 
import MyButton from "../MyButton";

describe("MyButton component", () => {
  it("El botón se debería renderizar correctamente", () => { 
    render(
        <MyButton 
            text='Hola' 
            txtcolor='white' 
            bgcolor='orange' 
            bordercolor='green'
            borderwidth='2'
            size='medium' 
            hover='blue' 
        />
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});