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

const images = [
  'https://luxphone.vercel.app/gallery/Accessories-11-1.webp',
  'https://luxphone.vercel.app/gallery/Accessories-Lux-Phone-(3).webp',
  'https://luxphone.vercel.app/gallery/Accessories-8-1.webp',
  'https://luxphone.vercel.app/gallery/Accessories-Lux-Phone-(2).webp',
  'https://luxphone.vercel.app/gallery/Accessories.webp',
  'https://luxphone.vercel.app/gallery/Accessories-6.webp',
  'https://luxphone.vercel.app/gallery/Accessories-Lux-Phone-(1).webp',
  'https://luxphone.vercel.app/gallery/Accessories-10-1.webp',
  'https://luxphone.vercel.app/gallery/Accessories-Lux-Phone.webp',
  'https://luxphone.vercel.app/gallery/Accessories-4.webp',
  'https://luxphone.vercel.app/gallery/Accessories-12.webp',
  'https://luxphone.vercel.app/gallery/Accessories-9-1.webp'
]; 