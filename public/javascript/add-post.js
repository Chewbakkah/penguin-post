async function newPostHandler(event) {
    event.preventDefault();
  
    const post_content = document.querySelector('textarea[name="post-content"]').value;
  
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
          post_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);
  