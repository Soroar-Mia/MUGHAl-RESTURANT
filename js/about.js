function showMoreInfo() {
    const moreInfoSection = document.getElementById('more-info');
    if (moreInfoSection.classList.contains('hidden')) {
        moreInfoSection.classList.remove('hidden');
    } else {
        moreInfoSection.classList.add('hidden');
    }
}
