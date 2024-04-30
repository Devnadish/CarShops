export function getTimeElapsed(dateString) {
    // Convert the date string to a Date object
    const date = new Date(dateString);

    // Get the current date and time
    const now = new Date();

    // Calculate the time difference in milliseconds
    const diff = now - date;

    // Convert the time difference to minutes, hours, and days
    const minutes = Math.floor(diff / 1000 / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Return the formatted string
    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now';
    }
}

export function JustDate(dateString) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    
    return `${day}/${month}/${year}`;
}


function calculateRemainingTime(deliveryDate) {
    // Get the current date and time
    const currentDate = new Date();
  
    // Ensure deliveryDate is also a Date object
    const parsedDeliveryDate = new Date(deliveryDate);
  
    // Calculate the time difference in milliseconds
    const timeDifference = parsedDeliveryDate.getTime() - currentDate.getTime();
  
    // Convert milliseconds to days, hours, and minutes
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  
    // Return an object with days, hours, and minutes
    return { days, hours, minutes };
  }