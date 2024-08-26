---
nav: Components
group: Provider
title: AWS
atomId: Aws
description: https://aws.amazon.com
---

## Icons

```tsx
import { Aws } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Aws size={64} />
    <Aws.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Aws } from '@unitalkai/icons';

export default () => <Aws.Text size={48} />;
```

## Combine

```tsx
import { Aws } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Aws.Combine size={64} />
    <Aws.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Brands

```tsx
import { Aws } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Aws.Brand size={64} />
    <Aws.BrandColor size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Aws } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Aws.Avatar size={64} />
    <Aws.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Aws } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Aws.colorPrimary} />
  </Flexbox>
);
```
