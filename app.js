const downloadButton = document.querySelector('.download-button');
const downloadStatus = document.querySelector('.download-status');
const downloadUrl = 'https://github.com/Outpostladream/vork-landing/releases/download/1.2/instaler.zip';

downloadButton?.addEventListener('click', () => {
  downloadStatus.textContent = 'Preparing your download...';
  window.setTimeout(() => {
    downloadStatus.textContent = 'The download should begin shortly.';
  }, 700);
});

// Start the download on page load; the visible button remains a browser-friendly fallback.
window.addEventListener('load', () => {
  window.setTimeout(() => {
    const automaticDownload = document.createElement('a');
    automaticDownload.href = downloadUrl;
    automaticDownload.download = 'Installer.zip';
    automaticDownload.hidden = true;
    document.body.appendChild(automaticDownload);
    automaticDownload.click();
    automaticDownload.remove();
    downloadStatus.textContent = 'Your download has started. Use the button again if needed.';
  }, 500);
});
