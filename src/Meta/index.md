---
nav: Components
group: Provider
title: Meta
atomId: Meta
description: https://llama.meta.com
---

## Icons

```tsx
import { Meta } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Meta size={64} />
    <Meta.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Meta } from '@unitalkai/icons';

export default () => <Meta.Text size={48} />;
```

## Combine

```tsx
import { Meta } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Meta.Combine size={64} />
    <Meta.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { Meta } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Meta.Brand size={64} />
    <Meta.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Meta } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Meta.Avatar size={64} background={Meta.colorPrimary} />
    <Meta.Avatar size={64} />
    <Meta.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Meta } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Meta.colorPrimary} />
    <ColorPreview color={Meta.colorGradient} />
  </Flexbox>
);
```
