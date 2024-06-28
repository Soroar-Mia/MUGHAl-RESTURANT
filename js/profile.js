document.addEventListener('DOMContentLoaded', () => {
    showSection('reviews');
});

function showSection(section) {
    const reviewsSection = document.getElementById('reviews-section');
    const favoritesSection = document.getElementById('favorites-section');
    const reviewsTab = document.getElementById('reviews-tab');
    const favoritesTab = document.getElementById('favorites-tab');

    if (section === 'reviews') {
        reviewsSection.classList.remove('hidden');
        favoritesSection.classList.add('hidden');
        reviewsTab.classList.add('border-blue-500', 'text-blue-500');
        favoritesTab.classList.remove('border-blue-500', 'text-blue-500');
    } else {
        reviewsSection.classList.add('hidden');
        favoritesSection.classList.remove('hidden');
        reviewsTab.classList.remove('border-blue-500', 'text-blue-500');
        favoritesTab.classList.add('border-blue-500', 'text-blue-500');
    }
}

function editProfile() {
    alert('Edit Profile button clicked!');
}
