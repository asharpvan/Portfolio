<template>
  <!-- Your HTML goes here -->
  <div class="wrapper">
    <header>
      <nav id="nav">
        <div class="menu-icon">
          <!-- <i class="fa fa-bars fa-2x"></i> -->
        </div>
        <div class="logo">LOGO</div>
        <div class="menu">
          <ul>
            <li><a href="#">Work</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="about">
      
    </div>
    <div class="techstack">
      
    </div>
  </div>
</template>

<script>
/* Your JS goes here */
export default {
/* Life Cycle Methods */
  beforeCreate: function () {
    console.log('Before Create')
  },
  created: function () {
    console.log('Created')
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeMount: function () {
    console.log('Before Mount')
  },
  mounted: function () {
    console.log('Mounted')
  },
  beforeUpdate: function () {
    console.log('Before Update')
  },
  updated: function () {
    console.log('Updated')
  },
  beforeDestroy: function () {
    console.log('Before Destroy')
  },
  destroyed: function () {
    console.log('Destroyed')
    window.removeEventListener('scroll', this.handleScroll)
  },
  data () {
    return {
      msg: 'Welcome to Your Home Page'
    }
  },
  methods: {
    handleScroll: function (event) {
      console.log('Scrolled!!')
      if (window.scrollY > window.screenTop) {
        document.getElementById('nav').classList.add('black')
      } else {
        document.getElementById('nav').classList.remove('black')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Your CSS goes here */

/* Intro */
header {
  width: 100%;
  height: 100vh;
  background: url("../assets/app/intro.jpg") no-repeat 50% 50%;
  background-size: cover;
}

.logo {
  position: fixed;
  float: left;
  margin: 15px 15px;
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
}

nav {
  position: fixed;
  width: 100%;
}

nav ul {
  list-style: none;
  background:  rgba(0,0,0,0);
  overflow: hidden;
  color: #ffffff;
  padding: 0;
  text-align: center;
  margin: 0;
  transition: 1s; 
}

nav.black ul {
  background:  #000000;
}

nav ul li {
  display: inline-block;
  padding: 20px;
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
}

.menu-icon {
  width: 100%;
  background: #000000;
  text-align: right;
  box-sizing: border-box;
  padding: 15px 15px;
  cursor: pointer;
  color: #ffffff;
  display: none;
}

/* button {
  height: 60px;
} */

@media (max-width: 580px) {
  .logo {
    position: fixed;
    top: 0;
    margin-top: 15px;
  }
  nav ul {
    max-height: 0px;
    background: #000000;
  }
  nav.black ul {
    background: #000000;
  }
  .showing {
    max-height: 20em;
  }
  nav ul li {
    box-sizing: border-box;
    width: 100%;
    padding: 24px 0;
    text-align: center;
  }
  .menu-icon {
    display: block;
  }
}

/* About Me */
.about {
  width: 100%;
  height: 100vh;
  background-color: yellow;
}

/* Tech Stack */
.techstack {
  width: 100%;
  height: 100vh;
  background-color: greenyellow;
}

</style>
