<template>
  <!-- Your HTML goes here -->
  <div class="wrapper">
    <!-- Header Div -->
    <header>
      <nav id="nav">
        <div class="menu-icon">
          <img @click="toggleMenu" src='../assets/app/menu-bars.png' alt="menu" width="25" height="25">
        </div>
        <div class="logo">LOGO</div>
        <div class="menu">
          <ul id="ul">
            <li><a href="#">Work</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <h1 class="intro_text">Some Title</h1>
      <h3 class="intro_text">Some | Long | Subtitle</h3>
    </header>
    <!-- About Div -->
    <div class="about">
      <h2 class="about_title">About Title</h2>
      <img class="about_profile_picture" src="../assets/app/profile_pic.png" alt="Profile Picture" width="200" height="200">
      <p class="about_details">Hi, My name is Pranav Sah, an alumni of University of Technology, Sydney and an iOS developer with a rich experience of 6 years of working in product as well as service based companies. In past, I was employed by companies working in ecommerce and healthcare sector, where as currently I work for a reputed financial institution. I consider myself to be equally adept at Swift and Objective C. I have no qualms of working as a lone wolf or in a team. I have experience working for a startup as well as for an MNC. Over the years, I have worked on various tools and technologies. Some of them are listed below: IoT, MSAzure, Bluetooth LE, Crashlytics, Bitrise, Backendless, Parse (deprecated), AVFoundation, Core Data, Core Animation, XML, JSON, iTunes Connect, Consuming of RESTful APIs, Sockets, Maps, SQLite, Social Frameworks and Push Notifications among others.</p>
    </div>
    <!-- Tech Stack Div -->
    <div class="techstack">
      <h2 class="techstack_title">Tech stack I dabble with</h2>
      <ul class="techstack_grid">
        <li>
          <div class="techstack_icon icon_swift">
          </div>
        </li>
        <li>
          <div class="techstack_icon icon_vue">
          </div>
        </li>
        <li>
          <div class="techstack_icon icon_nodejs">
          </div>
        </li>
        <li>
          <div class="techstack_icon icon_mongodb">
          </div>
        </li>
        <li>
          <div class="techstack_icon icon_html">
          </div>
        </li>
        <li>
          <div class="techstack_icon icon_css">
          </div>
        </li>

        <li>
          <div class="techstack_icon icon_github">
          </div>
        </li>
        <li>
          <div class="techstack_icon icon_gitlab">
          </div>
        </li>
      </ul>
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
    },
    toggleMenu: function () {
      console.log('menu button clicked')
      document.getElementById('ul').classList.toggle('showing')
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
  margin: 16px 36px;
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
}

.intro_text {
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  position: relative;
  top: 45%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

nav {
  position: fixed;
  width: 100%;
  z-index: 100;
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
  padding: 18px; /* Controls nav bar height in Desktop */
  /* background-color: red; */
}

nav ul li a {
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  /* background-color: aqua; */
}

.menu-icon {
  width: 100%;
  background: #000000;
  text-align: right;
  box-sizing: border-box;
  padding: 16px 24px;
  cursor: pointer;
  color: #ffffff;
  display: none;
}

@media (max-width: 580px) {
  .logo {
    position: fixed;
    top: 0;
    margin-top: 16px;
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

.about_title {
  font-weight: bolder;
  text-align: center;
}

.about_profile_picture {
  padding: 20px;
  margin-left: auto;
	margin-right: auto;
	display: block;
  border-radius: 50%;
}

.about_details {
  width: 95%;
  margin: auto auto;
  padding: 0;
  text-align: center;
}

/* Tech Stack */
/* .techstack {
  background-color: pink;
} */

.techstack_title {
  /* background-color: blue; */
  font-weight: bolder;
  text-align: center;
}

.techstack_grid {
	margin: 20px 0 0 0;
	padding: 0;
	list-style: none;
	display: block;
	text-align: center;
	width: 100%;
}

.techstack_grid:after {
	clear: both;
}

.techstack_grid:after, .techstack_icon:before {
	content: '';
	display: table;
}

.techstack_grid li {
	width: 256px;
	height: 256px;
	display: inline-block;
	margin: 15px;
}

.techstack_icon {
	width: 100%;
	height: 100%;
	position: relative;
	cursor: pointer;
    border-radius: 10px;
    -webkit-transition: 0.3s ease-in-out, 
    -webkit-transform 0.3s ease-in-out;
	-moz-transition:  0.3s ease-in-out, 
    -moz-transform 0.3s ease-in-out;
    transition: all 0.3s ease-in-out, 
    transform 0.3s ease-in-out, ;
}

.techstack_icon:hover {
	transform: scale(1.05); 
}
.icon_swift {
  background: url('../assets/app/techstack/swift.png') no-repeat 50% 50%;
}
.icon_vue {
  background: url('../assets/app/techstack/vue.png') no-repeat 50% 50%;
}
.icon_nodejs {
  background: url('../assets/app/techstack/nodejslogo.png') no-repeat 50% 50%;
}
.icon_mongodb {
  background: url('../assets/app/techstack/mongodb.png') no-repeat 50% 50%;
}
.icon_html {
  background: url('../assets/app/techstack/html.png') no-repeat 50% 50%;
}
.icon_css {
  background: url('../assets/app/techstack/css.png') no-repeat 50% 50%;
}
.icon_github {
  background: url('../assets/app/techstack/github.png') no-repeat 50% 50%;
}
.icon_gitlab {
	background: url('../assets/app/techstack/gitlab.png') no-repeat 50% 50%;
}


</style>
