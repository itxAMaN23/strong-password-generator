document.getElementById('length').addEventListener('input', function (e) {
  document.getElementById('length-value').textContent = e.target.value;
});

document.getElementById('generate').addEventListener('click', function () {
  const length = parseInt(document.getElementById('length').value);
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSymbols = document.getElementById('symbols').checked;

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = lowercase;
  if (includeUppercase) chars += uppercase;
  if (includeNumbers) chars += numbers;
  if (includeSymbols) chars += symbols;

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', async function () {
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value;

  if (!password) return;

  try {
    await navigator.clipboard.writeText(password);

    const icon = this.querySelector('i');
    icon.className = 'fas fa-check';
    setTimeout(() => {
      icon.className = 'far fa-copy';
    }, 1500);
  } catch (err) {
    console.error('Failed to copy password:', err);

    const icon = this.querySelector('i');
    icon.className = 'fas fa-times';
    setTimeout(() => {
      icon.className = 'far fa-copy';
    }, 1500);
  }
});