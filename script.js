document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerText = 'Toggle Theme';
    toggleBtn.className = 'toggle-theme';

    let dark = true;
    toggleBtn.addEventListener('click', () => {
        dark = !dark;
        document.body.style.color = dark ? '#fff' : '#111';
        document.body.style.background = dark
            ? 'linear-gradient(-45deg, #2c3e50, #34495e, #000000, #2c3e50)'
            : 'linear-gradient(-45deg, #f3ec78, #af4261, #1abc9c, #2ecc71)';
    });

    document.body.appendChild(toggleBtn);
});
