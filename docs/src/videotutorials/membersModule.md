---
title: Member Onboarding
---

### Member Onbording Processes

This category of videos shows the processes involved in onboarding  members in FundMaster Xc:

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
        <iframe 
          :src="currentVideo.videoUrl" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen>
        </iframe>
      </div>
      <button class="close-modal" @click="closeModal">Close</button>
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
          thumbnail: "https://img.youtube.com/vi/Gd35pDk4M-Q/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/Gd35pDk4M-Q",
          description: "Part 1: Single member upload process"
        },
        {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/FSxAP01P-P0/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/FSxAP01P-P0",
          description: "Part 2: Single member authorization process"
        },
        {
          id: 3,
          thumbnail: "https://img.youtube.com/vi/kNr0FsEo4EA/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/kNr0FsEo4EA",
          description: "Part 1: Batch members upload process"
        },
        {
          id: 4,
          thumbnail: "https://img.youtube.com/vi/McTUOqDArQc/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/McTUOqDArQc",
          description: "Part 2: Batch members authorization process"
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
  width: 60%;
  padding-bottom: 33.75%;
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
  background-color: red; /* Red background */
  color: white; /* White text/icon */
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
</style>
