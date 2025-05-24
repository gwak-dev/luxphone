// Gallery initialization
document.addEventListener('DOMContentLoaded', function() {
  // Initialize gallery
  const gallery = new Gallery('product-gallery');
  
  // 실제 이미지 데이터
  const galleryImages = [
    {
      url: '/gallery/Accessories 11-1.webp',
      thumbnail: '/gallery/Accessories 11-1.webp',
      alt: 'LUX PHONE Accessories 11'
    },
    {
      url: '/gallery/Accessories Lux Phone (3).webp',
      thumbnail: '/gallery/Accessories Lux Phone (3).webp',
      alt: 'LUX PHONE Accessories Collection 3'
    },
    {
      url: '/gallery/Accessories 8-1.webp',
      thumbnail: '/gallery/Accessories 8-1.webp',
      alt: 'LUX PHONE Accessories 8'
    },
    {
      url: '/gallery/Accessories Lux Phone (2).webp',
      thumbnail: '/gallery/Accessories Lux Phone (2).webp',
      alt: 'LUX PHONE Accessories Collection 2'
    },
    {
      url: '/gallery/Accessories.webp',
      thumbnail: '/gallery/Accessories.webp',
      alt: 'LUX PHONE Accessories'
    },
    {
      url: '/gallery/Accessories 6.webp',
      thumbnail: '/gallery/Accessories 6.webp',
      alt: 'LUX PHONE Accessories 6'
    },
    {
      url: '/gallery/Accessories Lux Phone (1).webp',
      thumbnail: '/gallery/Accessories Lux Phone (1).webp',
      alt: 'LUX PHONE Accessories Collection 1'
    },
    {
      url: '/gallery/Accessories 10-1.webp',
      thumbnail: '/gallery/Accessories 10-1.webp',
      alt: 'LUX PHONE Accessories 10'
    },
    {
      url: '/gallery/Accessories Lux Phone.webp',
      thumbnail: '/gallery/Accessories Lux Phone.webp',
      alt: 'LUX PHONE Accessories Main'
    },
    {
      url: '/gallery/Accessories 4.webp',
      thumbnail: '/gallery/Accessories 4.webp',
      alt: 'LUX PHONE Accessories 4'
    },
    {
      url: '/gallery/Accessories 12.webp',
      thumbnail: '/gallery/Accessories 12.webp',
      alt: 'LUX PHONE Accessories 12'
    },
    {
      url: '/gallery/Accessories 9-1.webp',
      thumbnail: '/gallery/Accessories 9-1.webp',
      alt: 'LUX PHONE Accessories 9'
    }
  ];
  
  gallery.addImages(galleryImages);
}); 