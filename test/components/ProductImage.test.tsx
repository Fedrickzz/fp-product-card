import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('Pruebas en ProductImage', () => {
  test('debe de mostrar el componente con la imagen pernalizada', () => {
    const wrapper = renderer.create(<ProductImage img="https://ma.png" />);

    // console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del productro', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    // console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
