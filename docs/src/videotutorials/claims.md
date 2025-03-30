---
title: Claims Processes
---

### Retirement Benefits Processing

This category of videos shows the processes involved in processing retirement benefits in FundMaster Xc:

<div class="videos-grid">
  <div v-for="(video, index) in videos" :key="video.id" class="video-item" @click="openModal(video, index)">
    <img :src="video.thumbnail" alt="Video Thumbnail">
    <div class="play-overlay">▶</div>
    <p>{{ video.description }}</p>
  </div>
</div>

<template>
  <div class="video-modal" v-if="currentVideo">
    <div class="video-modal-overlay" @click="closeModal">
      <div class="video-modal-frame">
        <iframe 
          :src="currentVideo.autoPlayUrl" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <button class="close-modal" @click="closeModal">Close</button>
      <button class="next-video" v-if="currentIndex < videos.length - 1" @click="nextVideo">Next Video ⏭️</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: 1,
          thumbnail: "https://img.youtube.com/vi/nR9zff9Nf94/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/nR9zff9Nf94",
          description: "Claim initiation process"
        },
        {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/GFa3dcCBhk0/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/GFa3dcCBhk0",
          description: "Normal retirement benefits calculation process"
        }
        // Add more videos here...
      ],
      currentVideo: null,
      currentIndex: null
    };
  },
  methods: {
    openModal(video, index) {
      this.currentIndex = index;
      this.currentVideo = { ...video, autoPlayUrl: video.videoUrl + "?autoplay=1" };
    },
    closeModal(event) {
      if (!event || event.target.classList.contains("video-modal-overlay") || event.target.classList.contains("close-modal")) {
        this.currentVideo = null;
      }
    },
    nextVideo() {
      if (this.currentIndex < this.videos.length - 1) {
        this.openModal(this.videos[this.currentIndex + 1], this.currentIndex + 1);
      }
    }
  }
};
</script>

<style>
/* Grid Layout */
.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
}

/* Video Thumbnails */
.video-item {
  position: relative;
  text-align: center;
  cursor: pointer;
}

.video-item img {
  max-width: 100%;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.video-item:hover img {
  transform: scale(1.05);
}

/* Play Button Overlay */
.play-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  padding: 10px 20px;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.video-item:hover .play-overlay {
  opacity: 1;
}

/* Video Modal */
.video-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.video-modal-frame {
  position: relative;
  width: 90%;
  max-width: 900px;
  padding-bottom: 56.25%;
  height: 0;
}

.video-modal-frame iframe {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* Close Button */
.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: red;
  color: white;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.close-modal:hover {
  background-color: darkred;
}

/* Next Video Button */
.next-video {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.next-video:hover {
  background-color: #0056b3;
}
</style>
