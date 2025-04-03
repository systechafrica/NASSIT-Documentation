---
title: Claims Processes
---

### Retirements benefits processing

This category of videos shows the processes involved in processing retirements benefits processing in FundMaster Xc:

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
          thumbnail: "https://img.youtube.com/vi/nR9zff9Nf94/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/nR9zff9Nf94",
          description: "Claim initiation process"
        },
        {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/GFa3dcCBhk0/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/GFa3dcCBhk0",
          description: "Normal retirement benefits calculation process"

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


