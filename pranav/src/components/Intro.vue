<template>
  <!-- Your HTML goes here -->
  <div class="wrapper">
    <!-- Header Div -->
    <header>
      <img class="about_profile_picture" src="../assets/app/page_related/profile_pic.png" alt="Profile Picture" width="200" height="200">
      <h1 class="intro_text">Some Title</h1>
      <h3 class="intro_text">Some | Long | Subtitle</h3>
    </header>
    <!-- About Div -->
    <div class="about">
      <h2 class="about_title">About Title</h2>
      <img class="about_profile_picture" src="../assets/app/page_related/profile_pic.png" alt="Profile Picture" width="200" height="200">
      <p class="about_details">Hi, My name is Pranav Sah, an alumni of University of Technology, Sydney and an iOS developer with a rich experience of 6 years of working in product as well as service based companies. In past, I was employed by companies working in ecommerce and healthcare sector, where as currently I work for a reputed financial institution. I consider myself to be equally adept at Swift and Objective C. I have no qualms of working as a lone wolf or in a team. I have experience working for a startup as well as for an MNC. Over the years, I have worked on various tools and technologies. Some of them are listed below: IoT, MSAzure, Bluetooth LE, Crashlytics, Bitrise, Backendless, Parse (deprecated), AVFoundation, Core Data, Core Animation, XML, JSON, iTunes Connect, Consuming of RESTful APIs, Sockets, Maps, SQLite, Social Frameworks and Push Notifications among others.</p>
    </div>
    <!-- Tech Stack Div -->
    <div class="techstack">
      <h2 class="techstack_title">Tech stack I dabble with</h2>
      <ul class="techstack_grid">
        <li>
          <div class="techstack_icon icon_swift">
          </div>
          <h2 class="techstack_icon_heading">Swift</h2>
        </li>
        <li>
          <div class="techstack_icon icon_vue">
          </div>
          <h2 class="techstack_icon_heading">VueJS</h2>
        </li>
        <li>
          <div class="techstack_icon icon_nodejs">
          </div>
          <h2 class="techstack_icon_heading">Node JS</h2>
        </li>
        <li>
          <div class="techstack_icon icon_mongodb">
          </div>
          <h2 class="techstack_icon_heading">Mongo DB</h2>
        </li>
        <li>
          <div class="techstack_icon icon_html">
          </div>
          <h2 class="techstack_icon_heading">HTML</h2>
        </li>
        <li>
          <div class="techstack_icon icon_css">
          </div>
          <h2 class="techstack_icon_heading">CSS</h2>
        </li>
        <li>
          <div class="techstack_icon icon_github">
          </div>
          <h2 class="techstack_icon_heading">Gitlab</h2>
        </li>
        <li>
          <div class="techstack_icon icon_gitlab">
          </div>
          <h2 class="techstack_icon_heading">Github</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* Your JS goes here */
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Your CSS goes here */

/* Intro */
header {
  width: 100%;
  height: 100vh;
  background: url("../assets/app/banner/intro.jpg") no-repeat 50% 50%;
  background-size: cover;
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
.techstack {
  padding-bottom: 2em;
  /* background-color: pink; */
}

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

.techstack_icon_heading {
  text-decoration: underline;
}

.techstack_icon:hover {
	transform: scale(1.05); 
}
.icon_swift {
  background: url('../assets/app/techstack/swift_1.png') no-repeat 50% 50%;
}
.icon_vue {
  background: url('../assets/app/techstack/vue_1.png') no-repeat 50% 50%;
}
.icon_nodejs {
  background: url('../assets/app/techstack/node_1.png') no-repeat 50% 50%;
}
.icon_mongodb {
  background: url('../assets/app/techstack/mongo_1.png') no-repeat 50% 50%;
}
.icon_html {
  background: url('../assets/app/techstack/html_1.png') no-repeat 50% 50%;
}
.icon_css {
  background: url('../assets/app/techstack/css_1.png') no-repeat 50% 50%;
}
.icon_github {
  background: url('../assets/app/techstack/github_1.png') no-repeat 50% 50%;
}
.icon_gitlab {
	background: url('../assets/app/techstack/gitlab_1.png') no-repeat 50% 50%;
}

@media (max-width: 580px) {
    .techstack_grid li {
      width: 128px;
      height: 128px;
      display: inline-block;
      margin: 15px;
  }
  .icon_swift {
    background: url('../assets/app/techstack/swift_2.png') no-repeat 50% 50%;
  }
  .icon_vue {
    background: url('../assets/app/techstack/vue_2.png') no-repeat 50% 50%;
  }
  .icon_nodejs {
    background: url('../assets/app/techstack/node_2.png') no-repeat 50% 50%;
  }
  .icon_mongodb {
    background: url('../assets/app/techstack/mongo_2.png') no-repeat 50% 50%;
  }
  .icon_html {
    background: url('../assets/app/techstack/html_2.png') no-repeat 50% 50%;
  }
  .icon_css {
    background: url('../assets/app/techstack/css_2.png') no-repeat 50% 50%;
  }
  .icon_github {
    background: url('../assets/app/techstack/github_2.png') no-repeat 50% 50%;
  }
  .icon_gitlab {
    background: url('../assets/app/techstack/gitlab_2.png') no-repeat 50% 50%;
  }
}
</style>
