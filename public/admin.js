const BASE_URL = "http://localhost:3000";

async function getUsers() {
  try {
    let response = await axios.get(`${BASE_URL}/users`);

    const usersList = document.getElementById("users-table-body");

    response.data.forEach((userData) => {
      const userRow = document.createElement("tr");
      userRow.innerHTML = `
      <td><a href="/users/${userData.id}">ID: ${userData.id}</a></td>
      <td>Email: ${userData.email}</td>
      <td>First Name: ${userData.firstName}</td>
      <td>Last Name: ${userData.lastName}</td>
      <td>State: ${userData.state}</td>
      `;
      usersList.append(userRow);
    });
  } catch (e) {
    console.log(e);
  }
}



getUsers();
