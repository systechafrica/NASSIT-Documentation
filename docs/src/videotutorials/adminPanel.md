---
title: System Admin Processes
---

### System Administration processes

"This category of videos demonstrates how various processes are executed within the Administration pane in FundMaster Xc."

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
          id: 6,
          thumbnail: "https://img.youtube.com/vi/ndbLDVng3Hw/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/ndbLDVng3Hw",
          description: "How to create a User Account, Log in and Switch Schemes"
        },
                {
          id: 6,
          thumbnail: "https://img.youtube.com/vi/IZ-BvBoJ7Xc/hqdefault.jpg",
          videoUrl: "https://www.youtube.com/embed/IZ-BvBoJ7Xc",
          description: "How to create a User Profile, Assign Permissions and move a User from one Profile to Another"
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

.video-item p {
  text-align: left;
  margin-top: 8px;
  font-size: 12px;
  line-height: 1.4;
}

.video-item img {
  max-width: 100%;
  border-radius: 8px;  /* Ensures rounded corners */
  transition: transform 0.3s ease;  /* Smooth zoom-in effect */
}

.video-item img:hover {
  transform: scale(1.05);  /* Slight zoom on hover */
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