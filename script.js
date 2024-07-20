document.getElementById('darkModeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');
    document.querySelector('.navbar-collapse').classList.toggle('dark-mode');

    document.querySelectorAll('.card').forEach(function (card) {
        card.classList.toggle('dark-mode');
      });

    document.querySelectorAll('.card-title').forEach(function (title) {
        title.classList.toggle('dark-mode');
      });

    document.querySelectorAll('.card-subtitle').forEach(function (subtitle) {
        subtitle.classList.toggle('dark-mode');
      });

    document.querySelectorAll('.card-body').forEach(function (body) {
        body.classList.toggle('dark-mode');
      });

    document.querySelectorAll('.card-footer').forEach(function (footer) {
        footer.classList.toggle('dark-mode');
      });

    document.querySelectorAll('.list-group').forEach(function (list) {
        list.classList.toggle('dark-mode');
      });

    document.querySelectorAll('.list-group-item').forEach(function (item) {
        item.classList.toggle('dark-mode');
      });
  });
