const fact = document.querySelector('#penguin-fact').value.trim();

if(fact) {
    fetch('/api/fact', {
        method: 'post',
        body: JSON.stringify({
            id,
            fact
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => {console.log(response)})
}