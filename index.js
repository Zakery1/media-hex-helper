function mediaHexHelper(option) {

    let hexCode;
  
    switch(option) {
      case 'facebook':
        return hexCode = '#3B5A9B';
      case 'twitter':
        return hexCode = '#1DA1F2';
      case 'whatsapp':
        return hexCode = '#48C558';
      case 'instagram': 
        return hexCode = '#D82E84';
      case 'discord':
        return hexCode = '#7289DA';
      case 'youtube':
        return hexCode = '#FF0000';
      case 'netflix':
        return hexCode = '#E50914';
      case 'hulu':
        return hexCode = '#1CE783';
      case 'amazon-prime':
        return hexCode = '#00A8E1';
      case 'disney-plus':
        return hexCode = '#12225D'
      case 'apple':
        return hexCode = '#C463EB';
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