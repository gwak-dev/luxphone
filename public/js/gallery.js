// Gallery Component
class Gallery {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentIndex = 0;
    this.images = [];
    
    // Lightbox elements
    this.lightbox = null;
    this.lightboxImage = null;
    this.prevButton = null;
    this.nextButton = null;
    
    this.init();
  }
  
  init() {
    // Create gallery structure
    this.createGalleryStructure();
    // Create lightbox
    this.createLightbox();
    // Bind events
    this.bindEvents();
  }
  
  createGalleryStructure() {
    // Create gallery grid
    const galleryGrid = document.createElement('div');
    galleryGrid.className = 'gallery-grid';
    this.container.appendChild(galleryGrid);
  }
  
  createLightbox() {
    this.lightbox = document.createElement('div');
    this.lightbox.className = 'lightbox';
    
    // Create lightbox content
    const content = document.createElement('div');
    content.className = 'lightbox-content';
    
    // Create navigation buttons
    this.prevButton = document.createElement('button');
    this.prevButton.className = 'lightbox-nav prev';
    this.prevButton.innerHTML = '&lt;';
    
    this.nextButton = document.createElement('button');
    this.nextButton.className = 'lightbox-nav next';
    this.nextButton.innerHTML = '&gt;';
    
    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'lightbox-close';
    closeButton.innerHTML = '&times;';
    
    // Create image element
    this.lightboxImage = document.createElement('img');
    this.lightboxImage.className = 'lightbox-image';
    
    // Assemble lightbox
    content.appendChild(this.lightboxImage);
    this.lightbox.appendChild(closeButton);
    this.lightbox.appendChild(this.prevButton);
    this.lightbox.appendChild(this.nextButton);
    this.lightbox.appendChild(content);
    document.body.appendChild(this.lightbox);
  }
  
  bindEvents() {
    // Lightbox navigation
    this.prevButton.addEventListener('click', () => this.showPrevImage());
    this.nextButton.addEventListener('click', () => this.showNextImage());
    
    // Close lightbox
    this.lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.closeLightbox());
    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) this.closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          this.showPrevImage();
          break;
        case 'ArrowRight':
          this.showNextImage();
          break;
        case 'Escape':
          this.closeLightbox();
          break;
      }
    });
  }
  
  // Add images to gallery
  addImages(images) {
    this.images = images;
    const grid = this.container.querySelector('.gallery-grid');
    
    images.forEach((image, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      
      const img = document.createElement('img');
      img.src = image.thumbnail || image.url;
      img.alt = image.alt || '';
      img.loading = 'lazy';
      
      item.appendChild(img);
      grid.appendChild(item);
      
      // Add click event
      item.addEventListener('click', () => this.openLightbox(index));
    });
  }
  
  openLightbox(index) {
    this.currentIndex = index;
    this.lightboxImage.src = this.images[index].url;
    this.lightbox.classList.add('active');
  }
  
  closeLightbox() {
    this.lightbox.classList.remove('active');
  }
  
  showPrevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.lightboxImage.src = this.images[this.currentIndex].url;
  }
  
  showNextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.lightboxImage.src = this.images[this.currentIndex].url;
  }
}

document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/01.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/02.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/03.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/04.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/05.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/06.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/07.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/08.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/09.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/10.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/11.webp',
        'https://raw.githubusercontent.com/gwak-dev/luxphone/main/public/gallery/12.webp'
    ];

    const gallery = document.createElement('div');
    gallery.className = 'lux-gallery';
    gallery.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    `;

    images.forEach((url, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'gallery-item';
        imgContainer.style.cssText = `
            position: relative;
            padding-bottom: 100%;
            overflow: hidden;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s ease;
        `;

        const img = document.createElement('img');
        img.src = url;
        img.alt = `LUX PHONE Gallery Image ${index + 1}`;
        img.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        `;

        imgContainer.appendChild(img);
        gallery.appendChild(imgContainer);

        // Hover 효과
        imgContainer.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.1)';
        });

        imgContainer.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });

        // 클릭시 큰 이미지 보기
        imgContainer.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
                cursor: pointer;
            `;

            const modalImg = document.createElement('img');
            modalImg.src = url;
            modalImg.style.cssText = `
                max-width: 90%;
                max-height: 90vh;
                object-fit: contain;
            `;

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });

    // 갤러리를 페이지에 추가
    const targetElement = document.getElementById('lux-gallery') || document.body;
    targetElement.appendChild(gallery);
}); 