document.addEventListener('DOMContentLoaded', () => {
    const vietnamFlag = document.getElementById('vi');
    const chinaFlag = document.getElementById('cn');

    if (vietnamFlag) {
        vietnamFlag.addEventListener('click', () => {
            redirectToLanguage('vietnam');
        });
    }

    if (chinaFlag) {
        chinaFlag.addEventListener('click', () => {
            redirectToLanguage('china');
        });
    }

    function redirectToLanguage(language) {
        const currentPath = window.location.pathname;

        let newPath;
        
        if (language === 'vietnam') {
            if (currentPath === '/index_china.html' || currentPath === '/index_china') {
                newPath = '/';
            } else {
                newPath = currentPath.replace('_china', '');
            }
        } else if (language === 'china') {
            if (currentPath === '/index.html' || currentPath === '/') {
                newPath = '/index_china.html';
            } else if (!currentPath.includes('_china')) {
                newPath = `${currentPath}_china`;
            } else {
                newPath = currentPath;
            }
        }

        window.location.href = newPath;
    }
    // Xử lý thay đổi hình ảnh banner
    const bannerImage = document.querySelector('.banner img');

    if (bannerImage) {
        const images = [
            'static/baner.jpg',
            'static/baner.jpg',
            'static/baner.jpg'
        ];

        let currentImageIndex = 0;

        function changeBannerImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            bannerImage.src = images[currentImageIndex];
        }

        // Thay đổi hình ảnh mỗi 10 giây
        setInterval(changeBannerImage, 10000);
    }
});
