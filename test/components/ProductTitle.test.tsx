import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('Pruebas en ProductTitle', () => {
  test('debe de mostrar el componente con el titulo personalizado', () => {
    const wrapper = renderer.create(<ProductTitle title="Custom Product" />);

    // console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con el nombre del productro', () => {
    const wrapper = renderer.create(
    <ProductCard product={product1}>
      {
        ()=> (
          <ProductTitle/>
        )
      }
    </ProductCard>);

    // console.log(wrapper.toJSON());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
