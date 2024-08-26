---
nav: Components
group: Application
title: Microsoft Copilot
atomId: Copilot
description: https://copilot.microsoft.com
---

## Icons

```tsx
import { Copilot } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Copilot size={64} />
    <Copilot.Color size={64} />
  </Flexbox>
);
```

## Text

```tsx
import { Copilot } from '@unitalkai/icons';

export default () => <Copilot.Text size={48} />;
```

## Combine

```tsx
import { Copilot } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Copilot.Combine size={64} />
    <Copilot.Combine size={64} type={'color'} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Copilot } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Copilot.Avatar size={64} />
    <Copilot.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Copilot } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Copilot.colorPrimary} />
  </Flexbox>
);
```
