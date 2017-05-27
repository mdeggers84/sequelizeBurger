// setup static js for addition features / interaction with index page
$(document).ready(function () {
  var count = sessionStorage.getItem('count');

  // sets focus to textbox on page load
  function setFocus() {
    $('#burger-name').focus();
  }

  // loads header img based on session storage results
  function loadImage() {
    if (count === '3') {
      $('#burger-img').attr('src', $('#burger-img').attr('sloth')).css('visibility', 'visible');
    } else {
      $('#burger-img').attr('src', $('#burger-img').attr('burger')).css('visibility', 'visible');
    }
    $('#add-btn').on('click', function () {
      if ($('#burger-name').val().trim() === '') {
        alert('Please insert a value');
      }
    });
  }

  // clears session storage when db is reset
  $('#clear-btn').on('click', function () {
    sessionStorage.setItem('count', 0);
  });

  // adds to session storage count on click
  $(document).on('click', '.devour-btn', function () {
    if (count !== null) {
      count++;
    } else {
      count = 1;
    }
    sessionStorage.setItem('count', count);
  });

  loadImage();
  setFocus();
});
