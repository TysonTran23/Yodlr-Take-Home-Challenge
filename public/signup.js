const BASE_URL = "http://localhost:3000";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.querySelector('input[name="email"]').value;
    const firstName = form.querySelector('input[name="first"]').value;
    const lastName = form.querySelector('input[name="last"]').value;

    try {
      let response = await axios.post(`${BASE_URL}/users`, {
        email: email,
        firstName: firstName,
        lastName: lastName,
      });
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  });
});
