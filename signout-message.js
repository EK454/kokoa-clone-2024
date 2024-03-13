function confirmSignOut() {
    // Show the pop-up overlay for sign out confirmation
    document.getElementById('signOutConfirmationPopup').style.display = 'flex';
}

function signOut() {
    // Implementation of your sign-out logic
    console.log("Signed out successfully.");
    
    // Hide the pop-up overlay after confirming sign out
    document.getElementById('signOutConfirmationPopup').style.display = 'none';
}

function hideConfirmation() {
    // Hide the pop-up overlay without signing out
    document.getElementById('signOutConfirmationPopup').style.display = 'none';
}