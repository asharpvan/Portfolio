<template>
  <!-- Your HTML goes here -->
  <div class="baseview">
    <div class="about_top_end">
      <img class="about_dp" src="../assets/app/page_related/profile_pic.png" alt="Profile Picture" width="200" height="200">
      <p>Hi, I'm</p>
      <h1 class='about_top_name'>Pranav!</h1>
    </div>
    <div class="about_me">
      <!-- <h2 class='about_me'>About Me</h2> -->
      <p>An alumni of University of Technology, Sydney and an iOS developer with a rich experience of 6 years of working in product as well as service based companies. In past, I was employed by companies working in ecommerce and healthcare sector, where as currently I work for a reputed financial institution. I consider myself to be equally adept at Swift and Objective C. I have no qualms of working as a lone wolf or in a team. I have experience working for a startup as well as for an MNC. Over the years, I have worked on various tools and technologies. Some of them are listed below: IoT, MSAzure, Bluetooth LE, Crashlytics, Bitrise, Backendless, Parse (deprecated), AVFoundation, Core Data, Core Animation, XML, JSON, iTunes Connect, Consuming of RESTful APIs, Sockets, Maps, SQLite, Social Frameworks and Push Notifications among others.</p>
    </div>
    <div class="professional_me">
      <h2>People I've worked for</h2>
      <div class="work_exp">
        <h3 class="company">Biz2Credit Info Services Pvt Ltd, India</h3>
        <p class="designation"><b>Senior Market Analyst</b></p>
        <p class="duration"><b>March 2015-January 2016</b></p>
      </div>
      <div class="work_exp">
        <h3 class="company">Agatsa Software Pvt Ltd, India</h3>
        <p class="description">Worked as a <b>Senior Market Analyst</b> from <b>March 2015-January 2016</b></p>
      </div>
      <div class="work_exp">
        <h3 class="company">Cueblocks Technologies Pvt Ltd, India</h3>
        <p class="description">Worked as a <b>Senior Market Analyst</b> from <b>March 2015-January 2016</b></p>
      </div>
      <div class="work_exp">
        <h3 class="company">UG Software Pvt Ltd, India</h3>
        <p class="description">Worked as a <b>Senior Market Analyst</b> from <b>March 2015-January 2016</b></p>
      </div>
    </div>
    <div class="skills_me">
      <h2>Tech stack I dabble with</h2>
      <div class="skills_me_gallery">
        <figure class="skill_item">
          <img src="../assets/app/techstack/swift.png" alt="swift_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Swift 3.0+</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/objectivec.png" alt="objectivec_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Objective-C</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/vue.png" alt="vue_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Vue JS</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/node.png" alt="node_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Node JS</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/mongo.png" alt="mongo_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Mongo DB</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/github.png" alt="github_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Github</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/html.png" alt="html_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>HTML</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/css.png" alt="css_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>CSS</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/gitlab.png" alt="gitlab_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Gitlab</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/bitrise.png" alt="bitrise_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Bitrise</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/firebase.png" alt="firebase_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Firebase</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/crashlytics.png" alt="crashlytics_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Crashlytics</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/twilio.png" alt="twilio_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Twilio</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/basecamp.png" alt="basecamp_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Basecamp</strong></figcaption>
        </figure>
        <figure class="skill_item">
          <img src="../assets/app/techstack/jira.png" alt="jira_sample" class="gallery_image">
          <figcaption class="gallery_caption"><strong>Jira</strong></figcaption>
        </figure>
      </div>
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
.baseview {
  margin: 0;
  padding-top: 60px;
  /* background-color: red; */
}

/******************** About Me Section */
.about_top_end {
  margin: 0 ;
  padding: 1em;
  text-align: center;
  /* background-color: yellow; */
}
.about_top_end p {
  margin: 1em 0 0 0;
  /* background-color: blue; */
}
.about_top_end h1 {
  margin: 0;
  /* background-color: blue; */
}
.about_dp {
  border-radius: 50%;
}
.about_me {
  width: 95%;
  margin: auto;
}
.about_me p {
  padding-top: 1em;
  text-align: left;
  /* background-color: green; */
}

/******************** Professional Experience Section */
.professional_me {
  width: 95%;
  margin: auto;
  /* background-color: green; */
}
.work_exp {
  width: 95%;
  margin: auto;
  padding-bottom: 1em;
  /* background-color: red; */
}
.professional_me ul {
  list-style: none;
}
.company {
  margin: auto;
  /* background-color: yellowgreen; */
}
.designation {
  margin: 0;
  padding: auto 10px;
  /* padding: .5em 1em; */
  background-color: blue;
}

.duration {
  margin: 0;
  padding: auto 3em;
  background-color: blueviolet;
}


/******************** Skills Section */
.skills_me {
  width: 95%;
  margin: auto;
  /* background-color: green; */
}
.skills_me_gallery {
  text-align: center;
}
.skill_item {
  /* background-color: yellow; */
  display: inline-block;
  /* padding: .5em; */
  -webkit-transition: 0.3s ease-in-out, 
  -webkit-transform 0.3s ease-in-out;
  -moz-transition:  0.3s ease-in-out, 
  -moz-transform 0.3s ease-in-out;
  transition: all 0.3s ease-in-out, 
  transform 0.3s ease-in-out, ;
}
.skill_item:hover {
	transform: scale(1.05); 
}
.skill_item figcaption {
  text-align: center;
}
.skill_item img {
  border-radius: 10px;
}

</style>
