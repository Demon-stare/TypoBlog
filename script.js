fetch('Home.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('contentone').textContent = data.content;
    })
    .catch(error => {
        console.error('Error:', error);
    });