document.addEventListener('DOMContentLoaded', () => {
  // Get the pop-up element
  var popup = document.getElementById('profile-popup');
  
  // Change: Get all user components instead of just avatars
  var userComponents = document.querySelectorAll('.user-component');

  // Attach a click event listener to each user component
  userComponents.forEach(component => {
      component.addEventListener('click', () => {
          // Pass the user component to the function
          showProfilePopup(component);
      });
  });

  // Close button functionality remains unchanged
  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  // Clicking outside to close functionality remains unchanged
  window.addEventListener('click', (event) => {
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  });
});

// Adjusted to accept the userComponent instead of just the avatar
function showProfilePopup(userComponent) {
  // No change needed to get userName and userSubtitle
  var userName = userComponent.querySelector('.user-component__title').textContent;
  var userSubtitle = userComponent.querySelector('.user-component__subtitle').textContent;

  // Changes to get the avatar src from within the userComponent
  var userAvatarSrc = userComponent.querySelector('.user-component__avatar').src;

  // Getting the popup elements remains unchanged
  var profilePopup = document.getElementById('profile-popup');
  var popupTitle = profilePopup.querySelector('.profile-content h4');
  var popupInfo = profilePopup.querySelector('.profile-content p');
  var popupAvatar = profilePopup.querySelector('.profile-content img');

  // Populate the pop-up with this user's information
  popupTitle.textContent = userName;
  popupInfo.textContent = userSubtitle;
  // Updated to use userAvatarSrc
  popupAvatar.src = userAvatarSrc;

  // Making the pop-up visible remains unchanged
  profilePopup.style.display = 'flex';
}

// Function to close the profile pop-up, linked to the close button in the pop-up HTML
function closeProfilePopup() {
  var profilePopup = document.getElementById('profile-popup');
  profilePopup.style.display = 'none';
}
