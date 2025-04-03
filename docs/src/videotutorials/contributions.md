---
title: Contributions Processes
---

### Members contributions management

This category of videos shows the processes involved in managing member contributions in FundMaster Xc:

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
          thumbnail: "https://img.youtube.com/vi/HyiMP-p9LIg/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/HyiMP-p9LIg",
          description: "Part 1: Employer registration process: Capturing employer details"
        },
                {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/YYXMrfr-YG4/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/YYXMrfr-YG4",
          description: "Part 2: Employer registration processe: Employer certification process"
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


