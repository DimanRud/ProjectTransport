document.querySelectorAll('.nav__menu-elem').forEach(button => {
  button.addEventListener('click', function (event) {
    document.querySelectorAll('.nav__menu-item').forEach(item => {
      if (item.querySelector('.nav__menu-elem') !== button) {
        item.classList.remove('nav_open')
      }
    });
    event._isClick == true

    button.parentElement.classList.toggle('nav_open')
  });
});


document.body.addEventListener('click', function(event) {
  console.log(event.target.parentElement.classList.contains('nav_open'));

  if (
    event._isClick == true ||
    event.target.classList.contains('nav__menu-elem') == true ||
    event.target.classList.contains('dropdown-menu') == true
  ) return
  document.querySelectorAll('.nav__menu-item').forEach(item => {
    item.classList.remove('nav_open')
  });
});
