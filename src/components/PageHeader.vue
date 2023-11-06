<script>
export default {
  data() {
    return {
      title: 'boolando',
      logo:'/img/boolean-logo.png',
      menuLeft: [
        {
            gender: 'Uomo',
            link: "#"
        },
        {
            gender: 'Donna ',
            link: "#"
        },
        {
            gender: 'Bambino',
            link: "#"
        },

      ],
      
    menuRight: [
        {
            style: "fa-solid",
            icon: "fa-user",
            link: "#"
        },
        {
            style: "fa-solid",
            icon: "fa-user",
            link: "#"
        },
        {
            style: "fa-solid",
            icon: "fa-user",
            link: "#"
        },

      ]

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
            <li v-for="(gender , i) in menuLeft" :key="i"><a :href=' gender.link '>{{ gender.gender }}</a></li>
          
          </ul>
        </div>
        <div class="col">
            <figure class="nav-logo">
           <img :src="logo" alt="">
        </figure>
        </div>
        <div class="col">
           
            <ul class="menu">
              <li v-for="(icon, i) in menuRight" :key="i"><a :href=" icon.link "><i :class='[icon.icon, icon.style]'  ></i></a></li>
              
             
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
    padding: 15px 10px;

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