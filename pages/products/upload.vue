<template>
    <div>
      <h1>Upload File to Firebase</h1>
      <input type="file" @change="onFileChange" />
      <button @click="uploadFile">Upload</button>
      <p v-if="uploadStatus">{{ uploadStatus }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { storage } from '@/plugins/firebase'; // นำเข้า storage จาก firebase
  import { ref as storageRef, uploadBytes } from 'firebase/storage';
  
  const file = ref(null);
  const uploadStatus = ref('');
  
  const onFileChange = (event) => {
    file.value = event.target.files[0]; // รับไฟล์จาก input
  };
  
  const uploadFile = () => {
    if (file.value) {
      const storageReference = storageRef(storage, `uploads/${file.value.name}`);
      uploadBytes(storageReference, file.value).then((snapshot) => {
        uploadStatus.value = 'File uploaded successfully!';
      }).catch((error) => {
        uploadStatus.value = `Error uploading file: ${error.message}`;
      });
    } else {
      uploadStatus.value = 'Please select a file first.';
    }
  };
  </script>
  
  <style scoped>
  /* เพิ่มสไตล์ตามที่คุณต้องการ */
  </style>
  