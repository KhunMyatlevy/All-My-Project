function loadPage(event, pageUrl) {
    event.preventDefault(); // Prevent default link behavior (page reload)
    
    // Fetch the content of the page
    fetch(pageUrl)
        .then(response => response.text())
        .then(data => {
            // Replace the content inside the main-content div
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
