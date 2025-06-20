import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../ModalComponent';

describe('Modal', () => {
  test('no renderiza nada si isOpen es false', () => {
    const { container } = render(
      <Modal isOpen={false} onClose={() => {}} size="medium">
        Contenido
      </Modal>
    );
    expect(container).toBeEmptyDOMElement();
  });

  test('renderiza el modal y muestra el contenido cuando isOpen es true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}} size="medium">
        Contenido del modal
      </Modal>
    );
    expect(screen.getByText('Contenido del modal')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cerrar/i })).toBeInTheDocument();
  });

  test('aplica la clase de tamaño correcta según la prop size', () => {
    const { rerender } = render(
      <Modal isOpen={true} onClose={() => {}} size="small">
        Pequeño
      </Modal>
    );
    let modalContent = screen.getByTestId('modal-content');
    expect(modalContent.className).toContain('min-h-60');

    rerender(
      <Modal isOpen={true} onClose={() => {}} size="medium">
        Mediano
      </Modal>
    );
    modalContent = screen.getByTestId('modal-content');
    expect(modalContent.className).toContain('min-h-90');

    rerender(
      <Modal isOpen={true} onClose={() => {}} size="large">
        Grande
      </Modal>
    );
    modalContent = screen.getByTestId('modal-content');
    expect(modalContent.className).toContain('min-h-120');
  });

  test('llama a onClose cuando se hace click en el botón cerrar', () => {
    const onCloseMock = jest.fn();
    render(
      <Modal isOpen={true} onClose={onCloseMock} size="medium">
        Contenido
      </Modal>
    );

    const button = screen.getByRole('button', { name: /cerrar/i });
    fireEvent.click(button);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
