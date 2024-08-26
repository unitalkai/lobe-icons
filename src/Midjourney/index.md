---
nav: Components
group: Application
title: Midjourney
atomId: Midjourney
description: https://midjourney.com
---

## Icons

```tsx
import { Midjourney } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Midjourney size={64} />;
```

## Text

```tsx
import { Midjourney } from '@unitalkai/icons';

export default () => <Midjourney.Text size={48} />;
```

## Combine

```tsx
import { Midjourney } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Midjourney.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Midjourney } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Midjourney.Avatar size={64} />
    <Midjourney.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Midjourney } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Midjourney.colorPrimary} />
  </Flexbox>
);
```
