
import { render, screen } from '@testing-library/react';
import { ButtonComponent } from '../ButtonComponent';
import styles from './ButtonComponent.module.css';

describe('ButtonComponent', () => {

  test('renderiza el texto correctamente', () => {
    render(<ButtonComponent text="Haz clic aquí" />);
    expect(screen.getByText('Haz clic aquí')).toBeInTheDocument();
  });

  test('aplica la clase CSS correspondiente al tipo', () => {
    render(<ButtonComponent type="danger" />);
    const button = screen.getByRole('button');
    expect(button.className).toContain(styles.button_component);
    expect(button.className).toContain(styles.danger);
  });

  test('usa texto por defecto si no se especifica', () => {
    render(<ButtonComponent />);
    expect(screen.getByText('Press me')).toBeInTheDocument();
  });
});
