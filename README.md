# create-contextual-content

An essential utility to create *HTML* or *SVG* content without leaking unnecessary nodes.

```js
import content from 'create-contextual-content';

// HTML
const td = content('<td></td>');

// SVG
const rect = content('<rect />', true);
```
