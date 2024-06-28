function changeBannerImage() {
    const bannerImage = document.getElementById('banner-image');
    const images = [
        'https://via.placeholder.com/1200x400?text=New+Banner+1',
        'https://via.placeholder.com/1200x400?text=New+Banner+2',
        'https://via.placeholder.com/1200x400?text=New+Banner+3'
    ];
    const currentImage = bannerImage.src;
    let newImage = images[0];

    for (let i = 0; i < images.length; i++) {
        if (currentImage.includes(images[i])) {
            newImage = images[(i + 1) % images.length];
            break;
        }
    }

    bannerImage.src = newImage;
}
