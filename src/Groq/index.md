---
nav: Components
group: Provider
title: Groq
atomId: Groq
description: https://wow.groq.com
---

## Icons

```tsx
import { Groq } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Groq size={64} />;
```

## Text

```tsx
import { Groq } from '@unitalkai/icons';

export default () => <Groq.Text size={48} />;
```

## Combine

```tsx
import { Groq } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Groq.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Groq } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Groq.Avatar size={64} />
    <Groq.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Groq } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Groq.colorPrimary} />
  </Flexbox>
);
```
