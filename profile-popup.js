document.addEventListener('DOMContentLoaded', () => {
  // Get the pop-up element
  var popup = document.getElementById('profile-popup');
  
  // Get all user components instead of just avatars
  var userComponents = document.querySelectorAll('.user-component');

  // Attach a click event listener to each user component
  userComponents.forEach(component => {
      component.addEventListener('click', () => {
          // Pass the user component to the function
          showProfilePopup(component);
      });
  });

  // Adjusted to close the pop-up when clicking outside
  window.addEventListener('click', (event) => {
      // Check if the click is outside the .profile-content
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  });
});

function showProfilePopup(userComponent) {
  var userName = userComponent.querySelector('.user-component__title').textContent;
  
  // Safe check for subtitle element
  var userSubtitleElement = userComponent.querySelector('.user-component__subtitle');
  var userSubtitle = userSubtitleElement ? userSubtitleElement.textContent : '';

  // Safe check for avatar image
  var userAvatar = userComponent.querySelector('.user-component__avatar');
  var userAvatarSrc = userAvatar ? userAvatar.src : '';

  // Getting the popup elements
  var profilePopup = document.getElementById('profile-popup');
  var popupTitle = profilePopup.querySelector('.profile-content h4');
  var popupInfo = profilePopup.querySelector('.profile-content p');
  var popupAvatar = profilePopup.querySelector('.profile-content img');

  // Populate the pop-up with this user's information
  popupTitle.textContent = userName;
  popupInfo.textContent = userSubtitle;
  popupAvatar.src = userAvatarSrc;

  // Making the pop-up visible
  profilePopup.style.display = 'flex';
}
