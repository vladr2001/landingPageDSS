// Obține elementul butonului plimbător
var floatingButton = document.getElementById('floatingButton');

// Adaugă un eveniment de scroll
window.onscroll = function() {
  // Verifică poziția de defilare
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // Dacă s-a defilat suficient, afișează butonul
    floatingButton.style.display = 'block';
  } else {
    // Altfel, ascunde butonul
    floatingButton.style.display = 'none';
  }
};