document.addEventListener('DOMContentLoaded', () => {
    const statusIndicator = document.getElementById('statusIndicator');

    function updateOnlineStatus() {
        if (navigator.onLine) {
            statusIndicator.textContent = 'You are currently online';
            statusIndicator.classList.remove('offline');
            statusIndicator.classList.add('online');
        } else {
            statusIndicator.textContent = 'You are currently offline';
            statusIndicator.classList.remove('online');
            statusIndicator.classList.add('offline');
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    // Initial status check
    updateOnlineStatus();
});
