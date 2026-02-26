<template>
  <nav class="nav">
    <RouterLink class="navbtn" to="/">Home</RouterLink>
    <RouterLink class="navbtn" to="/about">About</RouterLink>
    <RouterLink class="navbtn" to="/books">Books</RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
  gap: 8px;
  justify-content: center;  
  margin-top: 20px;          
}

.navbtn {
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
}
</style>