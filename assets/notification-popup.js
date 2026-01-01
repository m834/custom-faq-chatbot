/**
 * Admissions Notification Popup Handler
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('CFAQ: Notification script loaded');
    
    const notificationPopup = document.getElementById('cfaq-notification-popup');
    console.log('CFAQ: Notification popup element:', notificationPopup);
    
    if (!notificationPopup) {
        console.warn('CFAQ: Notification popup element not found. Make sure [admissions_notification] shortcode is added to your page.');
        return;
    }

    const closeBtn = document.getElementById('cfaq-notification-close-btn');
    const closeBtnIcon = document.getElementById('cfaq-notification-close');
    const overlay = document.querySelector('.cfaq-notification-overlay');
    const applyBtn = document.getElementById('cfaq-notification-apply-btn');

    console.log('CFAQ: Close btn:', closeBtn);
    console.log('CFAQ: Apply btn:', applyBtn);

    // Check if notification was previously closed in this session
    const notificationClosed = sessionStorage.getItem('cfaq_notification_closed');
    console.log('CFAQ: Notification closed flag:', notificationClosed);
    
    // Show notification only if it hasn't been closed in this session
    if (!notificationClosed) {
        console.log('CFAQ: Showing notification');
        showNotification();
    } else {
        console.log('CFAQ: Notification was previously closed in this session');
    }

    function showNotification() {
        notificationPopup.classList.add('active');
        notificationPopup.style.display = 'flex';
        console.log('CFAQ: Notification display state updated');
    }

    function closeNotification() {
        notificationPopup.classList.remove('active');
        notificationPopup.style.display = 'none';
        // Store that notification was closed (persists during current session/tab)
        sessionStorage.setItem('cfaq_notification_closed', 'true');
        console.log('CFAQ: Notification closed');
    }

    // Close notification when Close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('CFAQ: Close button clicked');
            closeNotification();
        });
    }

    // Close notification when X icon is clicked
    if (closeBtnIcon) {
        closeBtnIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('CFAQ: Close icon clicked');
            closeNotification();
        });
    }

    // Close notification when overlay is clicked
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            e.stopPropagation();
            console.log('CFAQ: Overlay clicked');
            closeNotification();
        });
    }

    // Handle Apply Now button
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            console.log('CFAQ: Apply Now button clicked');
            // You can change this to your actual application page URL
            window.location.href = '/apply'; // Change this to your application page URL
        });
    }

    console.log('CFAQ: Notification script initialization complete');
});
