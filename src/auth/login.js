// Hent elementene fra HTML
const loginForm = document.getElementById('login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const errorMessageElement = document.getElementById('error-message');

// Håndter login-submit
loginForm.addEventListener('submit', async function(event) {
  event.preventDefault(); // Hindre at skjemaet sender data på vanlig måte

  const username = usernameField.value;
  const password = passwordField.value;

  try {
    // Send POST-forespørsel til backend
    const response = await fetch('https://pixelnest-backend-h0bvadfcaxcrfre9.norwayeast-01.azurewebsites.net/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: username, password: password }),
    });

    const data = await response.json();
    
    if (response.ok) {
      alert('Innlogging vellykket! 🌟');
    } else {
      errorMessageElement.textContent = data || 'Feil ved innlogging 😢';
    }
  } catch (error) {
    errorMessageElement.textContent = 'Noe gikk galt, prøv igjen senere 😕';
  }
});
