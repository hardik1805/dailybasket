// Generate a 6-digit code based on current time (HHMMSS)
function generateTimeCode(addMins = 10) {
    const now = new Date(Date.now() + addMins * 60 * 1000);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return Number(`${hours}${minutes}${seconds}`); // HHMMSS format
}

module.exports = {generateTimeCode}