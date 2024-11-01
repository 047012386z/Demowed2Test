<template>
    <div>
      <header>
        <nav>
          <h1 class="logo">TestWed2</h1>
          <NuxtLink to="/">หน้าแรก</NuxtLink>
          <NuxtLink to="/about">เกี่ยวกับเรา</NuxtLink>
          <NuxtLink to="/products">กล่องถ่าย</NuxtLink>
          <NuxtLink to="/products/detail">ข้อมูล</NuxtLink>
          <NuxtLink to="/products/upload">ประวัติการถ่าย</NuxtLink>
        </nav>
      </header>
      <div>
        <slot/>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* จัดการสไตล์ของ header */
  header {
    background-color: #4a90e2;
    padding: 20px 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  /* สไตล์โลโก้ */
  .logo {
    font-size: 1.8rem;
    color: #fff;
    display: inline-block;
    margin-right: 20px;
    font-weight: bold;
  }
  
  /* สไตล์สำหรับเมนูนำทาง */
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  /* ปรับสไตล์ลิงก์ */
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.1rem;
    margin: 0 15px;
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: #f3d250; /* สีเมื่อ hover */
  }
  
  /* ทำให้ header เป็น responsive */
  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      text-align: center;
    }
  
    .logo {
      margin-bottom: 15px;
    }
  }
  </style>
  