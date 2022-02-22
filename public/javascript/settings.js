async function newUsernameHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username-update").value.trim();
  const user_id = document.querySelector("#user_id").value.trim();
  if (username) {
    const response = await fetch(`/api/users/${user_id}`, {
      method: "PUT",
      body: JSON.stringify({
        username,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/settings");
    } else {
      alert(response.statusText);
    }
  }
}

async function newIconHandler(event) {
  event.preventDefault();
  const icon = document.querySelector("#icon-update").value.trim();
  const user_id = document.querySelector("#user_id").value.trim();
  if (icon) {
    const response = await fetch(`/api/users/${user_id}`, {
      method: "PUT",
      body: JSON.stringify({
        icon,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/settings");
    } else {
      alert(response.statusText);
    }
  }
}

async function newHeroHandler(event) {
  event.preventDefault();
  const hero = document.querySelector("#hero-update").value.trim();
  const user_id = document.querySelector("#user_id").value.trim();
  if (hero) {
    const response = await fetch(`/api/users/${user_id}`, {
      method: "PUT",
      body: JSON.stringify({
        hero,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/settings");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".new-username")
  .addEventListener("submit", newUsernameHandler);
document
  .querySelector(".new-icon")
  .addEventListener("submit", newIconHandler);
document
  .querySelector(".new-hero")
  .addEventListener("submit", newHeroHandler);
