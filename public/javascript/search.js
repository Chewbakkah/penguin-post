async function newSearchHandler(event) {
  event.preventDefault();

  
    const search_result = document.querySelector('input[name="search-result"]').value;
    console.log(search_result);
        
    const response = await fetch('/api/profiles', {
      method: 'GET',
      body: JSON.stringify({
          search_result
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
  
  document.querySelector('.new-search-form').addEventListener('submit', newSearchHandler); 
