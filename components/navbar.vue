<template>
  <nav class="navbar">
    <img class="logo" src="/assets/images/logo_dark-trans.png" alt="" srcset="">
    <a href="javascript:void(0);" class="icon" @click="open_menu">
      <img class="burger" src="/assets/images/icons/bars-solid.svg" alt="hamburger menu icon">
    </a>
    <ul :class="{
      'menu': true,
      'slide-in': burgerMenuOpen,
      'slide-out': !burgerMenuOpen
    }">
      <router-link tag="li" to="/home" class="nav-link">Home</router-link>
      <li class="has-sub-menu">
        <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
        <ul class="sub-menu">
          <router-link tag="li" class="nav-link sub-menu-item" to="/portfolio/greenthermique">Green Thermique</router-link>
          <router-link tag="li" class="nav-link sub-menu-item" to="/portfolio/caribfood">CaribFood Restaurant</router-link>
          <router-link tag="li" class="nav-link sub-menu-item" to="/portfolio/pawpatrol">Paw Patrol</router-link>
        </ul>
      </li>
      <router-link class="nav-link" tag="li" to="/contact">Contact</router-link>
      <router-link class="nav-link" tag="li" to="/about">About</router-link>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const burgerMenuOpen = ref(false);

function open_menu() { burgerMenuOpen.value = !burgerMenuOpen.value; }

</script>

<style scoped>

a {
  color: #f7f7f7;
}

.logo {
  height: 70px;
  top: 5px;
  position: absolute;
}

.burger {
  height: 50px;
}

.nav-link:hover {
  color: #e7c000 !important;
}

.router-link-active {
  color: #e7c000 !important;
}

@media screen and (max-width: 700px) {
  .navbar {
    overflow: hidden;
    /*margin-bottom: 200px;*/
    margin-top: 10px;
  }

  .navbar ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style-type: none;
    padding: 0;
    justify-content: flex-end;
    margin-right: 166px;
    margin-top: 90px;
  }

  .menu {
    left: -80px;
    position: absolute;
  }

  .sub-menu {
    position: absolute;
    display: none !important;
    flex-direction: column !important;
    gap: 10px !important;
    top: -48px;
    padding-left: 80px !important;
  }

  .icon {
    display: block;
    height: 50px;
    width: 50px;
    display: block;
    position: absolute;
    left: 25px;
    top: 25px;
    filter: invert(100%) sepia(1%) saturate(3137%) hue-rotate(284deg) brightness(114%) contrast(94%);
  }

  .logo {
    display: inline-block;
    left: 40%;
  }

  .slide-in {
    animation-name: slidein;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  .slide-out {
    animation-name: slideout;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes slidein {
    from {
      left: -80px;
      display: block;
      position: absolute;
    }

    to {
      left: 20px;
      display: block;
      position: absolute;
    }
  }

  @keyframes slideout {
    from {
      left: 20px;
      display: block;
      position: absolute;
    }

    to {
      left: -80px;
      display: block;
      position: absolute;
    }
  }

  @keyframes slideinsubmenu {
    from {
      left: -80px;
      display: block;
      position: absolute;
      opacity: 0;
    }

    to {
      left: 20px;
      display: block;
      position: absolute;
      opacity: 1.0;
    }
  }
}

@media screen and (min-width: 701px) {

  .navbar {
    overflow: hidden;
    margin-bottom: 100px;
    margin-top: 10px;
  }

  .icon {
    display: none;
    height: 50px;
    width: 50px;
    position: absolute;
    left: 25px;
    top: 25px;
    filter: invert(100%) sepia(1%) saturate(3137%) hue-rotate(284deg) brightness(114%) contrast(94%);
  }

  .navbar ul {
    display: flex;
    flex-direction: row;
    gap: 50px;
    list-style-type: none;
    padding: 0;
    justify-content: flex-end;
    margin-right: 166px;
  }

  .sub-menu {
    position: absolute;
    display: none !important;
    flex-direction: column !important;
    gap: 10px !important;
    padding-top: 10px !important;
  }

  .has-sub-menu:hover .sub-menu,
  .sub-menu:hover,
  .sub-menu-item:hover {
    display: flex !important;
    flex-direction: column !important;
  }

  .has-sub-menu:hover .sub-menu {
    animation-name: slidedownsubmenu;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes slidedownsubmenu {
    from {
      top: 45px;
      display: block;
      position: absolute;
      opacity: 0;
    }

    to {
      top: 50px;
      display: block;
      position: absolute;
      opacity: 1.0;
    }
  }
}</style>