const downloadButton = document.querySelector('.download-button');
const downloadStatus = document.querySelector('.download-status');

downloadButton?.addEventListener('click', () => {
  downloadStatus.textContent = 'Preparing your download...';
  window.setTimeout(() => {
    downloadStatus.textContent = 'The download should begin shortly.';
  }, 700);
});
