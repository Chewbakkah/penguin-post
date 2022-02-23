async function newSearchHandler(event) {
    event.preventDefault();
  
    const search_result = document.querySelector('input[name="search-result"]').value;
    console.log(search_result);
    
    if (search_result.ok) {
        var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.profile + window.location.search_result;
        document.location.replace(newURL);
      //document.location.replace('/profile/'+ {searchValue});
    } else {
      alert(search_result.statusText);
    }
  }
  
  document.querySelector('.new-search-form').addEventListener('submit', newSearchHandler);
  
  