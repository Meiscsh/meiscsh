const videoPlayer = document.getElementById('main-video');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const videos = [
  'vid/gameikai.MOV',
  'vid/loveniverse.MOV',
  'vid/iloveyou.MOV'
];

let currentVideoIndex = 0;

function loadVideo(index) {
  if (index >= 0 && index < videos.length) {
    currentVideoIndex = index;
    videoPlayer.src = videos[currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play().catch((e) => {
      console.log("Autoplay prevented:", e);
    });
  }
}

// Auto-play next video when current ends
videoPlayer.addEventListener('ended', () => {
  loadVideo((currentVideoIndex + 1) % videos.length);
});

nextBtn.addEventListener('click', () => {
  loadVideo((currentVideoIndex + 1) % videos.length);
});

prevBtn.addEventListener('click', () => {
  loadVideo((currentVideoIndex - 1 + videos.length) % videos.length);
});

// Initialize with the first video
loadVideo(0);

const fullscreenBtn = document.getElementById('fullscreen-btn');

fullscreenBtn.addEventListener('click', toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      document.body.style.zoom = "1";
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        document.body.style.zoom = "1";
      });
    }
  }
}

document.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    document.body.style.zoom = "1";
  }
});

document.querySelectorAll('.copy-text').forEach(element => {
    element.addEventListener('click', function() {
      const textToCopy = this.getAttribute('data-text');
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Visual feedback
        this.classList.add('copied');
        setTimeout(() => {
          this.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          this.classList.add('copied');
          setTimeout(() => {
            this.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Fallback copy failed: ', err);
        }
        document.body.removeChild(textArea);
      });
    });
  });

const scaleBtn = document.getElementById('scale-btn');

scaleBtn.addEventListener('click', () => {
  document.body.style.zoom = '0.8'; // Set zoom to 80%
});



