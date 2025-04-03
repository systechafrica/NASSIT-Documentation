---
title: Portal Processes
---

### Self-Service Portal Key Processes

This category of videos shows the MSS processes involved in interacting with the core system remotely.

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
      ]
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
