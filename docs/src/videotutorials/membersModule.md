---
title: Member Registration
---

### Member Onbording Processes

This category of videos shows the processes involved in onboarding  members in FundMaster Xc:

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
          thumbnail: "https://img.youtube.com/vi/hz02AsMO5RI/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/hz02AsMO5RI",
          description: "Part 1: Member onboarding process: Capturing member details"
        },
        {
          id: 2,
          thumbnail: "https://img.youtube.com/vi/sYUXYyTJiCk/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/sYUXYyTJiCk",
          description: "Part 2: Member onboarding process: Member certification process"
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
  border-radius: 8px;  /* Ensures rounded corners */
  transition: transform 0.3s ease;  /* Smooth zoom-in effect */
}

.video-item img:hover {
  transform: scale(1.05);  /* Slight zoom on hover */
}
</style>

