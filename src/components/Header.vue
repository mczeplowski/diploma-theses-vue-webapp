<template>
  <header>
    <div class="container">
      <router-link to="/">
        <span>Diploma</span>
        <span>Theses</span>
      </router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #3d3d3d;
  box-shadow: 0 0 2rem #3d3d3d;
  color: #fff;
}

a {
  height: 3rem;
  font-size: 3rem;
  line-height: 3rem;
  font-weight: 900;
  color: #0080ff;
  text-decoration: none;
  padding: 0 1rem;
  background-image: linear-gradient(
    to left,
    transparent,
    transparent 50%,
    #0080ff 50%,
    #0080ff
  );
  background-position: 100% 0;
  background-size: 200% 100%;
  transition: all 0.25s ease-in;

  &:hover {
    background-position: 0 0;
    color: #3d3d3d;
  }

  span:first-of-type {
    color: #fff;
  }
}
</style>
