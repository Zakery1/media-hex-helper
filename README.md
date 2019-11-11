# What is this?

Get the colors of popular media platforms instead of having to find hex codes.

# Installation 

`npm i media-hex --save`

## Example

One can put their styles in an object in one's React component, then replace the CSS property value with this function.

```
import React from 'react';

import { mediaHexHelper } from 'media-hex';


const mediaColor = {
    color: mediaHexHelper('apple')
}

function Styles() {
    return (
        <div style={mediaColor}>hello</div>
    );
}

export default Styles;

```

- ![#C463EB](https://placehold.it/15/f03c15/000000?text=+) `'apple'`
- ![#FF0000](https://placehold.it/15/c5f015/000000?text=+) `'youtube'`
- ![#FDCC17](https://placehold.it/15/1589F0/000000?text=+) `'google'`
- ![#1BD75F](https://placehold.it/15/1589F0/000000?text=+) `'spotify'`
- ![#5483DF](https://placehold.it/15/1589F0/000000?text=+) `'podcast-republic'`
- ![#F3873C](https://placehold.it/15/1589F0/000000?text=+) `'podcast-addict'`
- ![#C92325](https://placehold.it/15/1589F0/000000?text=+) `'i-heart-radio'`

