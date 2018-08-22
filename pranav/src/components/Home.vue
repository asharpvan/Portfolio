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
      <h2 class="techstack_title">Tech stack</h2>
      <div class="xop-section">
  <ul class="xop-grid">
    <li>
      <div class="xop-box xop-img-1">
        <a href="#">
        <div class="xop-info">
          <h3>Paint</h3>
          <p>Nulla commodo iaculis vulputate. Nullam enim mauris, dignissim id est nec, mollis pretium nulla.</p>
        </div></a>
      </div>
    </li>
    <li>
      <div class="xop-box xop-img-2">
        <a href="#">
        <div class="xop-info">
          <h3>Soap</h3>
          <p>Nulla commodo iaculis vulputate. Nullam enim mauris, dignissim id est nec, mollis pretium nulla.</p>
        </div></a>
      </div>
    </li>
    <li>
      <div class="xop-box xop-img-3">
        <a href="#">
        <div class="xop-info">
          <h3>Flowers</h3>
          <p>Nulla commodo iaculis vulputate. Nullam enim mauris, dignissim id est nec, mollis pretium nulla.</p>
        </div></a>
      </div>
    </li>
    <li>
      <div class="xop-box xop-img-4">
        <a href="#">
        <div class="xop-info">
          <h3>Feathers</h3>
          <p>Nulla commodo iaculis vulputate. Nullam enim mauris, dignissim id est nec, mollis pretium nulla.</p>
        </div></a>
      </div>
    </li>
  </ul>
</div>
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

/* About Me */
/* .about { */
  /* background-color: yellow; */
/* } */

.about_title {
  font-weight: bolder;
  text-align: center;
}

.about_profile_picture {
  padding: 20px;
  margin-left: auto;
	margin-right: auto;
	display: block;
  /* text-align: center; */
  border-radius: 50%;
}
.about_details {
  width: 95%;
  margin: auto auto;
  padding: 0;
  text-align: center;
}

/* Tech Stack */
.techstack {
  /* width: 95%; */
  /* margin: 4em auto; */
  background-color: greenyellow;
}

.techstack_title {
  font-weight: bolder;
  text-align: center;
}

.xop-section {
	max-width: 960px;
	margin: 0 auto;
	padding: 6% 2%;
}

.xop-grid {
	margin: 20px 0 0 0;
	padding: 0;
	list-style: none;
	display: block;
	text-align: center;
	width: 100%;
}

.xop-grid:after {
	clear: both;
}

.xop-grid:after, .xop-box:before {
	content: '';
	display: table;
}

.xop-grid li {
	width: 328px;
	height: 328px;
	display: inline-block;
	margin: 20px;
}

.xop-box {
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

.xop-box:hover {
	transform: scale(1.05); 
}

.xop-img-1 {
	background: linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.10)), /* bottom, image */
	url(../assets/app/techstack/mongodb.png) no-repeat 50% 50%;
}

.xop-img-2 {
	background: linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.10)), /* bottom, image */
	/* url(../images/soap.jpg); */
}

.xop-img-3 {
	background: linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.10)), /* bottom, image */
	/* url(../images/flower.jpg); */
}

.xop-img-4 {
	background: linear-gradient( rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.10)), /* bottom, image */
	/* url(../images/feather.jpg); */
}

.xop-info {
	position: absolute;
	width: inherit;
	height: inherit;
}

.xop-info h3 {
	font-family: 'Pacifico', cursive;
	font-weight: 400;
	color: #fff;
	font-size: 42px;
	margin: 0 30px;
	padding: 100px 0 0 0;
	line-height: 1.5;
}

.xop-info p {
	font-family: 'Source Sans Pro', sans-serif;
	color: #fff;
	padding: 4px 5px;
	margin: 0 30px;
	font-size: 14px;
	line-height: 2;
}

</style>
