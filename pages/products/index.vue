<template>
    <div class="container">
      <h1>โปรแกรมถ่ายภาพและบันทึกวิดีโอ</h1>
      <div class="camera">
        <video ref="camera" autoplay></video>
        <canvas ref="snapshot" style="display: none;"></canvas>
      </div>
      <div class="controls">
        <button @click="capturePhoto">ถ่ายภาพ</button>
        <button @click="startRecording" v-if="!isRecording">เริ่มบันทึกวิดีโอ</button>
        <button @click="stopRecording" v-if="isRecording">หยุดบันทึกวิดีโอ</button>
      </div>
      <div class="media-list">
        <h2>สื่อที่บันทึกไว้</h2>
        <div v-for="(media, index) in mediaList" :key="index" class="media-item">
          <img v-if="media.type === 'image'" :src="media.url" alt="ถ่ายภาพที่บันทึกไว้" />
          <video v-else controls :src="media.url"></video>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  const cameraStream = ref(null);
  const mediaRecorder = ref(null);
  const isRecording = ref(false);
  const mediaList = ref([]);
  
  const startCamera = async () => {
    try {
      cameraStream.value = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      const videoElement = document.querySelector('video');
      videoElement.srcObject = cameraStream.value;
    } catch (error) {
      console.error('การเข้าถึงกล้องล้มเหลว:', error);
    }
  };
  
  const capturePhoto = () => {
    const videoElement = document.querySelector('video');
    const canvas = document.querySelector('canvas');
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    canvas.getContext('2d').drawImage(videoElement, 0, 0);
    const imageUrl = canvas.toDataURL('image/png');
    mediaList.value.push({ type: 'image', url: imageUrl });
  };
  
  const startRecording = () => {
    mediaRecorder.value = new MediaRecorder(cameraStream.value);
    const chunks = [];
  
    mediaRecorder.value.ondataavailable = (e) => chunks.push(e.data);
    mediaRecorder.value.onstop = () => {
      const videoBlob = new Blob(chunks, { type: 'video/mp4' });
      const videoUrl = URL.createObjectURL(videoBlob);
      mediaList.value.push({ type: 'video', url: videoUrl });
    };
  
    mediaRecorder.value.start();
    isRecording.value = true;
  };
  
  const stopRecording = () => {
    if (mediaRecorder.value) {
      mediaRecorder.value.stop();
      isRecording.value = false;
    }
  };
  
  onMounted(startCamera);
  onUnmounted(() => {
    if (cameraStream.value) {
      cameraStream.value.getTracks().forEach((track) => track.stop());
    }
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: auto;
    text-align: center;
  }
  .camera {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
  .controls button {
    margin: 10px;
  }
  .media-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .media-item img,
  .media-item video {
    width: 100%;
    max-width: 400px;
    border-radius: 8px;
  }
  </style>
  