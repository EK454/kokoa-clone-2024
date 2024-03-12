// Run this script when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the pop-up element
  var popup = document.getElementById('profile-popup');
  
  // Get all the avatars
  var avatarImages = document.querySelectorAll('.user-component__avatar');

  // Attach a click event listener to each avatar image
  avatarImages.forEach(avatar => {
      avatar.addEventListener('click', () => {
          showProfilePopup(avatar);
      });
  });

  // Get the close button and attach an event listener to close the pop-up
  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
      popup.style.display = 'none';
  });

  // Event listener for clicking outside of the pop-up content to also close
  window.addEventListener('click', (event) => {
      if (event.target == popup) {
          popup.style.display = 'none';
      }
  });
});

function showProfilePopup(avatar) {
  // Get the parent container of the clicked avatar
  var userComponent = avatar.closest('.user-component');
  var userName = userComponent.querySelector('.user-component__title').textContent;
  var userSubtitle = userComponent.querySelector('.user-component__subtitle').textContent;

  // Get the pop-up element and its components
  var profilePopup = document.getElementById('profile-popup');
  var popupTitle = profilePopup.querySelector('.profile-content h4');
  var popupInfo = profilePopup.querySelector('.profile-content p');
  var popupAvatar = profilePopup.querySelector('.profile-content img');

  // Populate the pop-up with this user's information
  popupTitle.textContent = userName;
  popupInfo.textContent = userSubtitle;
  popupAvatar.src = avatar.src; // Assumes the avatar's src is what you want in the pop-up

  // Make the pop-up visible
  profilePopup.style.display = 'flex';
}

// Function to close the profile pop-up, linked to the close button in the pop-up HTML
function closeProfilePopup() {
  var profilePopup = document.getElementById('profile-popup');
  profilePopup.style.display = 'none';
}