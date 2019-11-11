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
**Available Media Hexes**

- ![#C463EB](https://placehold.it/15/C463EB/000000?text=+) `'apple'`
- ![#FF0000](https://placehold.it/15/FF0000/000000?text=+) `'youtube'`
- ![#FDCC17](https://placehold.it/15/FDCC17/000000?text=+) `'google'`
- ![#1BD75F](https://placehold.it/15/1BD75F/000000?text=+) `'spotify'`
- ![#5483DF](https://placehold.it/15/5483DF/000000?text=+) `'podcast-republic'`
- ![#F3873C](https://placehold.it/15/F3873C/000000?text=+) `'podcast-addict'`
- ![#C92325](https://placehold.it/15/C92325/000000?text=+) `'i-heart-radio'`

