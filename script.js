document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérification des identifiants
    if (email === 'martinbuchardpeenaert@gmail.com' && password === '1234') {
        window.location.href = 'bonjour.html'; // Redirige vers la page "bonjour"
    } else {
        window.location.href = 'salut.html'; // Redirige vers la page "salut"
    }
});
