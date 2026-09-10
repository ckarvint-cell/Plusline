const protectedImageArea = '.hero, .project-photo, .detail-hero, .detail-gallery, .brand';

document.addEventListener('contextmenu', (event) => {
  if (event.target.closest(protectedImageArea)) event.preventDefault();
});

document.addEventListener('dragstart', (event) => {
  if (event.target.closest(protectedImageArea)) event.preventDefault();
});
