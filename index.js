function mediaHexHelper(options) {
    let mediaHexes = document.querySelectorAll('.media-hex');

    if(options.media_type === 'apple')
        options.media_type = '#C463EB'
    else 
        options.media_type = 'grey'
    
    mediaHexes.forEach(mediaHex => {
        mediaHex.style.color = options.media_type;
    })
}

module.exports.mediaHexHelper =  mediaHexHelper;