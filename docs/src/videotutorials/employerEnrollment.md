---
title: Employer Enrollment Processes
---

### Employer Enrollment Processes

This category of videos shows how to onboard employers in FundMaster Xe:

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
          thumbnail: "https://img.youtube.com/vi/z1XcwrJl3cY/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/z1XcwrJl3cY",
          description: "Part 1: Employer registration process"
        },
                {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/iHJF5y_TRD8/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/iHJF5y_TRD8",
          description: "Part 2: Employer registration processe"
        },
                {
          id: 3,
          thumbnail: "https://img.youtube.com/vi/sZd2L7qs6n0/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/sZd2L7qs6n0",
          description: "Part 3: Employer registration process"
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
  padding-bottom: 54.25%;
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
