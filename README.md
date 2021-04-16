# What is this?

Get the colors of popular media platforms instead of having to find hex codes.

# Installation 

`npm i media-hex --save`

## React Example

One can put their styles in an object in one's React component file; however, replace the CSS property value with the mediaHexHelper.

```
import React from 'react';

import { mediaHexHelper } from 'media-hex';


const mediaColor = {
    color: mediaHexHelper('apple')
}

function MyComponent() {
    return (
        <div style={mediaColor}>This text will be Apple's purple</div>
    );
}

export default MyComponent;

```
**Social Media Hexes**
- ![predator gif](3-predator.gif) `'facebook'`
- ![#1DA1F2](https://placehold.it/15/1DA1F2/000000?text=+) `'twitter'`
- ![#48C558](https://placehold.it/15/48C558/000000?text=+) `'whatsapp'`
- ![#D82E84](https://placehold.it/15/D82E84/000000?text=+) `'instagram'`
- ![#7289DA](https://placehold.it/15/7289DA/000000?text=+) `'discord'`

**Video Streaming Media Hexes**
- ![#FF0000](https://placehold.it/15/FF0000/000000?text=+) `'youtube'`
- ![#E50914](https://placehold.it/15/E50914/000000?text=+) `'netflix'`
- ![#1CE783](https://placehold.it/15/1CE783/000000?text=+) `'hulu'`
- ![#00A8E1](https://placehold.it/15/00A8E1/000000?text=+) `'amazon-prime'`
- ![#12225D](https://placehold.it/15/12225D/000000?text=+) `'disney-plus'`


**Audio Media Hexes**
- ![#C463EB](https://placehold.it/15/C463EB/000000?text=+) `'apple'`
- ![#FDCC17](https://placehold.it/15/FDCC17/000000?text=+) `'google'`
- ![#1BD75F](https://placehold.it/15/1BD75F/000000?text=+) `'spotify'`
- ![#5483DF](https://placehold.it/15/5483DF/000000?text=+) `'podcast-republic'`
- ![#F3873C](https://placehold.it/15/F3873C/000000?text=+) `'podcast-addict'`
- ![#C92325](https://placehold.it/15/C92325/000000?text=+) `'i-heart-radio'`




