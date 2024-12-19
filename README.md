# TSDX React User Guide

```
import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons
} from 'do-product-card'
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
