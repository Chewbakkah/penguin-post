async function showFriends() {
    const response = await fetch(`/api/users/${user_id}`, {
        method: "GET",
        body: JSON.stringify({
          friends,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
    if (response.ok) {
        console.log(response)
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('friend-list').addEventListener('click', showFriends);