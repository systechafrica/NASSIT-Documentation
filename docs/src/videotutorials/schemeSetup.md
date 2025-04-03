---
title: Scheme Setup Processes
---

### Scheme Setup Processes

This categories of videos shows how various scheme setup configurations are done in FundMaster Xc:

<div class="videos-grid">
  <div v-for="video in videos" :key="video.id" class="video-item">
    <a :href="video.videoUrl" target="_blank" rel="noopener noreferrer">
      <img :src="video.thumbnail" alt="Video Thumbnail">
    </a>
    <p>{{ video.description }}</p>
  </div>
</div>

<script>
export default {
  data() {
    return {
      videos: [
             {
          id: 1,
          thumbnail: "https://img.youtube.com/vi/StIAaFSmr7I/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/StIAaFSmr7I",
          description: "How to log in to FundMaster"
        },
        {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/s82gFzfPMbA/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/s82gFzfPMbA",
          description: "How to navigate FundMaster Landing Page interface."
        },
        {
          id: 3,
          thumbnail: "https://img.youtube.com/vi/L2UxRTHFyak/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/L2UxRTHFyak",
          description: "How to nagivate FundMaster Xe Admin Panel interface."
        },
        // Add more videos here...
      ],
    };
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
</style>
