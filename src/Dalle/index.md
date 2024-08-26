---
nav: Components
group: Model
title: OpenAI (DALL·E)
atomId: Dalle
description: https://openai.com/dall-e-3
---

## Icons

**Not Official**: This icon has not been verified by the official source and comes from the online community.

```tsx
import { Dalle } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Dalle size={64} />
    <Dalle.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Dalle } from '@unitalkai/icons';

export default () => <Dalle.Text size={48} />;
```

## Combine

```tsx
import { Dalle } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Dalle.Combine size={64} />
    <Dalle.Combine size={64} extra={3} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Dalle } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Dalle.Avatar size={64} />
    <Dalle.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Dalle } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Dalle.colorPrimary} />
  </Flexbox>
);
```
