function loadNavigation() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            const body = document.querySelector('body');
            body.insertAdjacentHTML('afterbegin', data);
        })
        .catch(error => {
            console.error('Error loading navigation:', error);
        });
}

loadNavigation();

