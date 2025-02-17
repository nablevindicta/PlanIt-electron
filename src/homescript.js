document.getElementById('home-btn').addEventListener('click', function() {
  showContent('home-content');
});

document.getElementById('todo-btn').addEventListener('click', function() {
  showContent('todo-content');
});

document.getElementById('notepad-btn').addEventListener('click', function() {
  showContent('notepad-content');
});

document.getElementById('savings-btn').addEventListener('click', function() {
  showContent('savings-content');
});

function showContent(contentId) {
  // Sembunyikan semua konten
  document.querySelectorAll('.content > div').forEach(function(div) {
    div.style.display = 'none';
  });
  
  // Tampilkan konten yang dipilih
  document.getElementById(contentId).style.display = 'block';

  // Aktifkan tombol yang dipilih
  document.querySelectorAll('.sidebar button').forEach(function(button) {
    button.classList.remove('active');
  });

  document.getElementById(contentId.replace('-content', '-btn')).classList.add('active');
}