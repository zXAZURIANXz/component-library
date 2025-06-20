

import { render, screen } from '@testing-library/react';
import CardComponent from '../CardComponent';

describe('CardComponent', () => {
  test('renderiza el contenido hijo', () => {
    render(
      <CardComponent>
        <p>Contenido de prueba</p>
      </CardComponent>
    );
    expect(screen.getByText('Contenido de prueba')).toBeInTheDocument();
  });

  test('muestra la imagen con el src y alt correctos', () => {
    const testImage = 'https://example.com/test.jpg';
    render(<CardComponent image={testImage}>Test</CardComponent>);
    const img = screen.getByAltText('Card') as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe(testImage);
  });

});
