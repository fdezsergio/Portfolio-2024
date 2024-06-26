document.getElementById('worksLink').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.profile-card').classList.remove('active');
  document.querySelector('.profile-card').classList.add('shift-left');
  document.querySelector('.works-card').classList.remove('hidden');
  document.querySelector('.works-card').classList.add('active');
});

document.getElementById('profileLink').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.works-card').classList.remove('active');
  document.querySelector('.works-card').classList.add('hidden');
  document.querySelector('.profile-card').classList.remove('shift-left');
  document.querySelector('.profile-card').classList.add('active');
});

document.getElementById('profileLinkBack').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.works-card').classList.remove('active');
  document.querySelector('.works-card').classList.add('hidden');
  document.querySelector('.profile-card').classList.remove('shift-left');
  document.querySelector('.profile-card').classList.add('active');
});

document.getElementById('worksLinkBack').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.profile-card').classList.remove('active');
  document.querySelector('.profile-card').classList.add('shift-left');
  document.querySelector('.works-card').classList.remove('hidden');
  document.querySelector('.works-card').classList.add('active');
});

