var showHide = true;

function showToggle() {
  if (showHide === false) {
    document.getElementById('sideMenu').classList.toggle('show');
    showHide = true;
  }
  else {
    document.getElementById('sideMenu').classList.toggle('show');
    showHide = false;
  }
}

function showDropdown(inOut) {
  // Show dropdown
  if (inOut === 0) {
    document.getElementById('dropdownMenu').style.display = 'block';
  }
  else {
    document.getElementById('dropdownMenu').style.display = 'none';
  }
}

function switchContent(page)  {
  var pages = document.getElementsByClassName('contentPage');

  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  };

  document.getElementById(page).style.display = 'block';
}
