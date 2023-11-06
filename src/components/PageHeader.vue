<script>
export default {
  data() {
    return {
      title: 'boolando',
      logo:'/img/boolean-logo.png',

    }
  }
}
</script>

<template>
  <header class="page-header">
    <nav class="container">
      <div class="row">
        <div class="col">
          <ul class="menu">
            <li ><a href="#">Donna</a>
            </li>
            <li ><a href="#">Uomo</a>
            </li>
            <li ><a href="#">Bambino</a>
            </li>
          </ul>
        </div>
        <div class="col">
            <figure class="nav-logo">
           <img :src="logo" alt="">
        </figure>
        </div>
        <div class="col">
           
            <ul class="menu">
              <li><a href="#">A</a></li>
              <li><a href="#">B</a></li>
              <li><a href="#">C</a></li>
             
            </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>

.page-header {
    background-color: #FF6900;
    color: white;
    padding: 15px 0;

    .row {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .menu {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
}

.nav-logo {
    width: 200px,
}

</style>