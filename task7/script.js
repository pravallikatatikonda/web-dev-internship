async function fetchUsers() {
  const userList = document.getElementById('userList');
  const errorMessage = document.getElementById('errorMessage');
  userList.innerHTML = '';
  errorMessage.textContent = '';

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error('Network response was not ok');

    const users = await response.json();
    users.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('user-card');
      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      userList.appendChild(card);
    });

  } catch (error) {
    errorMessage.textContent = 'Failed to fetch data. Please check your connection.';
  }
}

// Fetch users on initial load
window.onload = fetchUsers;
