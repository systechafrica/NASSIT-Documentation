---
title: UI Walkthrough
---

### FundMaster UI

This category of videos shows how to navigate the UI in FundMaster Xc:

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
          thumbnail: "https://img.youtube.com/vi/StIAaFSmr7I/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/StIAaFSmr7I",
          description: "How to log in to FundMaster Xc"
        },
        {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/s82gFzfPMbA/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/s82gFzfPMbA",
          description: "How to navigate Fundmaster Xc Landing Page interface."
        },
        {
          id: 3,
          thumbnail: "https://img.youtube.com/vi/L2UxRTHFyak/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/L2UxRTHFyak",
          description: "How to nagivate FundMaster Xc Admin Panel interface."
        },
        {
          id: 4,
          thumbnail: "https://img.youtube.com/vi/mc-1DVWJM_4/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/mc-1DVWJM_4",
          description: "How to create User Profiles in FundMaster."
        },
        {
          id: 5,
          thumbnail: "https://img.youtube.com/vi/WUA_HwAqufM/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/WUA_HwAqufM",
          description: "How to Assign Permissions to user profiles in FundMaster Xc."
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
