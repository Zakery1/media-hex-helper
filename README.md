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
    )
}

export default Styles;

```

*  *color*  - _apple | youtube | google | spotify | podcast-republic | podcast-addict | i-heart-radio_ (Defaults to black)
