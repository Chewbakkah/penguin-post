
async function showFriends() {
    const response = await fetch(`/api/users/${id}/friends`, {
      method: 'get',
    });
  
    if (response.ok) {
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('friend-list').addEventListener('click', showFriends);