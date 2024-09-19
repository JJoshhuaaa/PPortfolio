document.addEventListener('DOMContentLoaded', () => {

    const timelineItems = document.querySelectorAll('.timeline-item');
    const contentSections = document.querySelectorAll('.content-section');

    if (timelineItems.length === 0) {
        console.error("No timeline items found");
    }

    if (contentSections.length === 0) {
        console.error("No content sections found");
    }

    timelineItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log("Timeline item clicked:", this.textContent);

            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });

            // Get the target content section
            const target = this.getAttribute('data-target');
            console.log("Target content section ID:", target);
            const contentSection = document.getElementById(target);

            if (contentSection) {
                // Show the targeted content section
                contentSection.classList.add('active');
            } else {
                console.error("Content section not found for ID:", target);
            }
        });
    });
});
