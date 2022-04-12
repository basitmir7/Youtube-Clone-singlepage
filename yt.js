openSidebar = () => {
  var sideBar = document.getElementById("sidebar");
  var main = document.getElementById("Main");

  sideBar.style.left = "0%";
  main.style.opacity = "0.7";
  sideBar.style.transition = "left 0.3s";
};

closeSidebar = () => {
  var sideBar = document.getElementById("sidebar");
  var main = document.getElementById("Main");

  sideBar.style.left = "-18%";
  main.style.opacity = "1";
  sideBar.style.transition = "left 0.3s";
};

function textonSearch() {
  var elem = document.getElementById("search-hover");

  elem.classList.add("searchhover");
}

function textoffSearch() {
  var elem = document.getElementById("search-hover");

  elem.classList.remove("searchhover");
}

//for microphone

function textonMic() {
  var elem = document.getElementById("microphone-hover");

  elem.classList.add("mp");
}

function textoffMic() {
  var elem = document.getElementById("microphone-hover");

  elem.classList.remove("mp");
}

//for create
function textonCreate() {
  var elem = document.getElementById("create-hover");

  elem.classList.add("createhover");
}

function textoffCreate() {
  var elem = document.getElementById("create-hover");

  elem.classList.remove("createhover");
}

//for apps

function textonApps() {
  var elem = document.getElementById("apps-hover");

  elem.classList.add("appshover");
}

function textoffApps() {
  var elem = document.getElementById("apps-hover");

  elem.classList.remove("appshover");
}
//for notification

function textonNoti() {
  var elem = document.getElementById("notification-hover");

  elem.classList.add("notificationhover");
}

function textoffNoti() {
  var elem = document.getElementById("notification-hover");

  elem.classList.remove("notificationhover");
}

// profilebar js

function closeProfilebar() {
  var profilebar = document.getElementById("profile-bar");

  profilebar.classList.remove("profileBar");
  profilebar.style.display = "none";
}

function openProfilebar() {
  var profilebar = document.getElementById("profile-bar");

  if (profilebar.classList.contains("profileBar")) {
    closeProfilebar();
  } else {
    profilebar.classList.add("profileBar");
    profilebar.style.display = "flex";
  }
}
