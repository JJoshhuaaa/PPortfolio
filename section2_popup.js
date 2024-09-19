document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.biografie-toggle');
    const itemsToToggle = document.querySelectorAll('.item2, .item3, .item4, .item5');
    const gridContainer = document.querySelector('.grid-container');
    const biografiePopup = document.querySelector('.item1'); // Make sure to use the correct class or ID
    const aboutButton = document.querySelector('a[href="index.html#section2"]');

    
    if (toggleButton && itemsToToggle.length > 0 && gridContainer && aboutButton) {
        
        toggleButton.addEventListener('click', function() {
            itemsToToggle.forEach(item => {
                item.classList.toggle('expanded');
            });

            toggleButton.textContent = toggleButton.textContent === '▼' ? '▲' : '▼';
            gridContainer.classList.toggle('active');
            biografiePopup.classList.toggle('active');
        });
        
        aboutButton.addEventListener('click', function() {
            if (!biografiePopup.classList.contains('active')) {
                biografiePopup.classList.add('active');
                itemsToToggle.forEach(item => {
                    item.classList.add('expanded');
                });

                toggleButton.textContent = '▲';
                gridContainer.classList.add('active');
            }
            
        });
    } 
});
