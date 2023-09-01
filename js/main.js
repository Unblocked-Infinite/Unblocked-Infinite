let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".menu");
function showAlert() {
  // Check if there's a previous alert timestamp stored in local storage
  const lastAlertTimestamp = localStorage.getItem('lastAlertTimestamp');

  // If there's no previous timestamp or it has been more than 4 hours, show the alert
  if (!lastAlertTimestamp || (Date.now() - parseInt(lastAlertTimestamp, 10)) >= 4 * 60 * 60 * 1000) {
    alert('Try To Find Me, And Fuck Off Tech Team. This Is My Site!');

    // Store the current timestamp in local storage as the last alert time
    localStorage.setItem('lastAlertTimestamp', Date.now().toString());
  }
}

// Call the showAlert function initially
showAlert();

menu.onclick = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle("move");
    bell.classList.remove('active')
}

let bell = document.querySelector(".notification");

document.querySelector('#bell-icon').onclick = () => {
    bell.classList.toggle('active');
}

var swiper = new Swiper(".trending-content", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1068: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
});

window.onscroll = function() {
    myfunction();
}

function myfunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-bar').style.width = scrolled + '%';
}



function createPopupBox(iconPath, backgroundColor, textColor) {
  var popupBox = document.createElement('div');
  popupBox.className = 'popup-box';
  popupBox.style.backgroundColor = backgroundColor;

  var popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  var discordIcon = document.createElement('img');
  discordIcon.src = iconPath;
  discordIcon.className = 'discord-icon';

  var textColumn = document.createElement('div');
  textColumn.className = 'text-column';

  var joinText = document.createElement('span');
  joinText.textContent = 'Join our Discord';
  joinText.className = 'join-text';

  var copyLink = document.createElement('button');
  copyLink.textContent = 'Copy Link';
  copyLink.className = 'copy-link';
  copyLink.addEventListener('click', function() {
      var tempInput = document.createElement('input');
      tempInput.value = 'https://discord.gg/PJZzQHKk';
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      copyLink.textContent = 'Copied!';
  });

  var closeBtn = document.createElement('span');
  closeBtn.textContent = 'x';
  closeBtn.className = 'popup-close';
  closeBtn.onclick = function() {
      popupBox.style.display = 'none';
      var now = new Date().getTime();
      var oneDay = 3 * 60 * 60 * 1000; // milliseconds in a 3 hours
      var nextDay = now + oneDay;
      localStorage.setItem('popupClosedTimestamp', nextDay);
  };

  var closedTimestamp = localStorage.getItem('popupClosedTimestamp');
  var now = new Date().getTime();
  if (closedTimestamp && now < closedTimestamp) {
      popupBox.style.display = 'none';
  }

  popupContent.appendChild(discordIcon);
  popupContent.appendChild(textColumn);

  textColumn.appendChild(joinText);
  textColumn.appendChild(copyLink);

  popupBox.appendChild(closeBtn);
  popupBox.appendChild(popupContent);

  document.body.appendChild(popupBox);
}




// Example usage
createPopupBox('./js/discord.jpg', 'var(--light-color)', 'var(--text-color)');


function createInfoPopup() {
  var popupBox = document.createElement('div');
  popupBox.className = 'info-popup-box';

  var infoText = document.createElement('div');
  infoText.className = 'info-text';
  infoText.textContent = 'All games from this website are hosted on GitHub, and the images are sourced from Google. All logos and trademarks are the property of Unblocked Infinite.';

  var understandButton = document.createElement('button');
  understandButton.textContent = 'I Understand';
  understandButton.className = 'understand-button';
  understandButton.addEventListener('click', function() {
      var now = new Date().getTime();
      var fiveWeeks = 5 * 7 * 24 * 60 * 60 * 1000; // milliseconds in 5 weeks
      var nextDate = now + fiveWeeks;
      localStorage.setItem('infoPopupClosedTimestamp', nextDate);
      popupBox.style.display = 'none';
  });

  popupBox.appendChild(infoText);
  popupBox.appendChild(understandButton);

  var closedTimestamp = localStorage.getItem('infoPopupClosedTimestamp');
  var now = new Date().getTime();
  if (closedTimestamp && now < closedTimestamp) {
      popupBox.style.display = 'none';
  }

  document.body.appendChild(popupBox);

  window.addEventListener('click', function(event) {
      if (event.target === popupBox) {
          event.stopPropagation();
      }
  });
}



createInfoPopup()


// Function to handle the resize event
function handleResize() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  if (screenWidth < 728) {
    document.getElementById("ad1").style.width = screenWidth.toString();
  } else {
    var adElement = document.getElementById(screenWidth.toString());
    if (adElement) {
      adElement.id = "ad1";
    }
  }
}

// Add event listener for the resize event
window.addEventListener("resize", handleResize);

// Initial check on page load
handleResize();



function toggleFullscreen(event) {
  event.preventDefault();
  const element = document.documentElement;

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
    // Enter fullscreen
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { // Firefox
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE/Edge
      element.msRequestFullscreen();
    }
    document.getElementById("fsicon").innerHTML = "<i class='bx bx-exit-fullscreen' ></i>";
  } else {
    // Exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { // IE/Edge
      document.msExitFullscreen();
    }
    document.getElementById("fsicon").innerHTML = "<i class='bx bx-fullscreen' ></i>";
  }
}

document.getElementById("fsicon").addEventListener("click", toggleFullscreen);






