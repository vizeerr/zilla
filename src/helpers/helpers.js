export function shortId(address) {
    // Ensure the address is valid and starts with "0x"
    if (address && address.startsWith('0x') && address.length === 42) {
      // Extract the first 5 characters after '0x' and the last 4 characters
      const firstPart = address.substring(0, 7); // "0x" + first 5 characters
      const lastPart = address.substring(address.length - 4); // last 4 characters
  
      // Return the shortened address
      return `${firstPart}..${lastPart}`;
    }
    return 'Invalid Address';
  }
  

export function formatTime(dateString) {
    const now = new Date();
    const past = new Date(dateString);
    const diffInSeconds = Math.floor((now - past) / 1000); // Difference in seconds
  
    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
  
    if (weeks > 0) {
      return `${weeks} week${weeks > 1 ? 's' : ''} `;
    } else if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
      return `${hours} hr${hours > 1 ? 's' : ''}`;
    } else if (minutes > 0) {
      return `${minutes} min${minutes > 1 ? 's' : ''}`;
    } else {
      return 'Just now';
    }
  }
  

export function imgUrl(url) {
  if(!url){
    return ""
  }
  const cleanedURL = url.replace(/^ipfs:/, ''); // Remove "ipfs:" prefix
  return `https://ipfs.io/ipfs/${cleanedURL}`;  // Add full IPFS URL
}