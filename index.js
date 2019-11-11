function mediaHexHelper(option) {

    let hexCode;
  
    switch(option) {
      case 'apple':
        return hexCode = '#C463EB';
      case 'youtube':
        return hexCode = '#FF0000';
      case 'google':
        return hexCode = '#FDCC17';
      case 'spotify':
        return hexCode = '#1BD75F';
      case 'podcast-republic':
        return hexCode = '#5483DF';
      case 'podcast-addict':
        return hexCode = '#F3873C';
      case 'i-heart-radio':
        return hexCode = '#C92325';
      default:
        return hexCode = 'black';
    }
  }

module.exports.mediaHexHelper =  mediaHexHelper;