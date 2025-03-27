---
title: Portal Processes
---

### Self service processes through the Self-service portal

This category of videos shows the MSS processes involved in interacting with the core system remotely.

<div class="videos-grid">
  <div v-for="video in videos" :key="video.id" class="video-item">
    <a @click="openModal(video)">
      <img :src="video.thumbnail" alt="Video Thumbnail">
    </a>
    <p>{{ video.description }}</p>
  </div>
</div>

<template>
  <div class="video-modal" v-if="currentVideo">
    <div class="video-modal-overlay" @click="closeModal">
      <div class="video-modal-frame">
        <iframe :src="currentVideo.videoUrl" frameborder="0" allowfullscreen></iframe>
      </div>
      <button class="close-modal">Close</button>
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
          thumbnail: "https://img.youtube.com/vi/Gj1dkVPtAVU/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/Gj1dkVPtAVU",
          description: "Part 1: Member registration process through the portal"
        },
        {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/Uge1moy5vMQ/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/Uge1moy5vMQ",
          description: "Part 2: Member registration process through the portal"
        },
        {
          id: 3,
          thumbnail: "https://img.youtube.com/vi/Im_c68ZD-8o/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/Im_c68ZD-8o",
          description: "Establishment (Employer) registration process through the portal"
        },
              
        // Add more videos here...
      ],
      currentVideo: null
    };
  },
  methods: {
    openModal(video) {
      this.currentVideo = video;
    },
    closeModal() {
      this.currentVideo = null;
    }
  }
};
</script>

<style>
.videos-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.video-item {
  text-align: center;
  cursor: pointer;
}

.video-item img {
  max-width: 100%;
}

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
  padding-bottom: 56.25%;
  height: 0;
}

.video-modal-frame iframe {
  position: absolute;
  width: 100%;
  height: 90%;
}

.close-modal {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
}
</style>
