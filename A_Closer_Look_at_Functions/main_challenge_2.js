// Coding Challenge 2

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function () {
        header.style.color = header.style.color === 'red' ? 'blue' : 'red';});
})();

