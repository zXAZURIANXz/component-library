

import { render, screen } from '@testing-library/react';
import { InputComponent } from '../InputComponent';

describe('InputComponent', () => {

  test('renderiza la etiqueta correctamente', () => {
    render(<InputComponent label="Nombre" />);
    expect(screen.getByText('Nombre')).toBeInTheDocument();
  });

  test('input está deshabilitado cuando disabled es true', () => {
    render(<InputComponent disabled={true} />);
    const input = screen.getByPlaceholderText('Placeholder') as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  test('input está habilitado cuando disabled es false', () => {
    render(<InputComponent disabled={false} />);
    const input = screen.getByPlaceholderText('Placeholder') as HTMLInputElement;
    expect(input.disabled).toBe(false);
  });
});
