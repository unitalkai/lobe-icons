---
nav: Components
group: Application
title: Github
atomId: Github
description: https://github.com
---

## Icons

```tsx
import { Github } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => <Github size={64} />;
```

## Text

```tsx
import { Github } from '@unitalkai/icons';

export default () => <Github.Text size={48} />;
```

## Combine

```tsx
import { Github } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16}>
    <Github.Combine size={64} />
  </Flexbox>
);
```

## Avatars

```tsx
import { Github } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

export default () => (
  <Flexbox gap={16} horizontal>
    <Github.Avatar size={64} />
    <Github.Avatar size={64} shape={'square'} />
  </Flexbox>
);
```

## Colors

```tsx
import { Github } from '@unitalkai/icons';
import { Flexbox } from 'react-layout-kit';

import ColorPreview from '../components/ColorPreview';

export default () => (
  <Flexbox gap={16} horizontal>
    <ColorPreview color={Github.colorPrimary} />
  </Flexbox>
);
```
