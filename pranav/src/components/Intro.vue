<template>
  <!-- Your HTML goes here -->
  <div class="wrapper">
    <header>
      <div class="intro_landing_section">
        <h1>Pranav Sah</h1>
        <h3>Coder | Survivor | Learner | Freak</h3>
        <br>
        <router-link to="/about" class="intro_landing_section_button">Know more</router-link>
      </div>
    </header>
    <div class="work_sample_section">
      <h2>Some of my work</h2>
      <figure class="gallery_item">
        <img src="../assets/app/projects/povo2.0_logo.png" alt="povo2.0_logo" class="gallery_image">
        <figcaption class="gallery_caption"><strong>povo2.0</strong></figcaption>
      </figure>
      <figure class="gallery_item">
        <img src="../assets/app/projects/deskera_logo.png" alt="deskera_logo" class="gallery_image">
        <figcaption class="gallery_caption"><strong>Deskera</strong></figcaption>
      </figure>
      <figure class="gallery_item">
        <img src="../assets/app/projects/sanket_sample.png" alt="sanket_sample" class="gallery_image">
        <figcaption class="gallery_caption"><strong>Sanket Life</strong></figcaption>
      </figure>
      <figure class="gallery_item">
        <img src="../assets/app/projects/geochirpr_sample.jpeg" alt="geochirpr_sample" class="gallery_image">
        <figcaption class="gallery_caption"><strong>GeoChirpr</strong></figcaption>
      </figure>
      <br>
      <br>
      <router-link to="/portfolio" class="work_sample_section_button">See more</router-link>
    </div>
  </div>
</template>

<script>
/* Your JS goes here */

export default {
  head: {
    title: {
      inner: 'Intro',
      separator: '|',
      complement: 'asharpvan'
    }
  },
  meta: [
    { name: 'application-name', content: 'asharpvan' },
    { name: 'description', content: 'asharpvan Intro Page', id: 'desc' },
    // Twitter
    { n: 'twitter:title', c: 'asharpvan' },
    { n: 'twitter:description', c: 'Get introduced to asharpvan' },
    { n: 'twitter:image', c: '../assets/logo.png' },
    { n: 'twitter:card', c: 'summary_large_image' },
    { n: 'twitter:site', c: '@asharpvan' },
    // Facebook / Open Graph
    { p: 'fb:app_id', c: '123456789' },
    { p: 'og:title', c: 'asharpvan' },
    { p: 'og:type', c: 'website' },
    { p: 'og:description', c: 'Content Title' },
    { p: 'og:url', c: 'Content Title' },
    { p: 'og:site_name', c: 'Content Title' },
    { p: 'og:image', c: 'https://example.com/image.jpg' }
  ],
  link: [
    { rel: 'canonical', h: 'https://asharpvan.firebaseapp.com/#/', id: 'canonical' },
    { rel: 'icon', href: '/static/img/icons/favicon-16.png', sizes: '16x16', type: 'image/png' },
    { r: 'icon', h: '/static/img/icons/favicon-32.png', sz: '32x32', t: 'image/png' }
  ],
  script: [
  ],
  style: [
  ]
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

.intro_landing_section {
  margin: 0;
  padding: 0;
  text-align: center;
  color: white;
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.intro_landing_section h1 {
  margin: 0;
}

.intro_landing_section_button {
  color: white;
  text-decoration: none;
  font-weight: 100;
  font-size: 20px;
  text-align: left;
  border: 2px solid  white;
  border-radius: 50px;
  padding: 5px 10px; 
}

.intro_landing_section_button:hover {
  color:black;
  background-color: white;
  transition-duration: 200ms;
  -webkit-transition-duration: 200ms;
  -moz-transition-duration: 200ms;
  -o-transition-duration: 200ms;
}

.work_sample_section  {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
  /* background-color: red; */
}


.work_sample_section h2 {
  margin: 0;
  /* background-color: green; */
  /* padding: .5rem; */
}

.gallery_item {
  margin-left: 2em;
  /* margin-right: .5em; */
  /* background-color: yellow; */
  display: inline-block;
  padding: .5em;
  
}

.gallery_item img {
  border-radius: 10px;
}

.work_sample_section_button {
  color:gray;
  text-decoration: none;
  font-weight: 100;
  font-size: 20px;
  text-align: left;
  border: 2px solid  gray;
  border-radius: 50px;
  padding: 5px 10px; 
}

.work_sample_section_button:hover {
  color:white;
  background-color: gray;
  transition-duration: 200ms;
  -webkit-transition-duration: 200ms;
  -moz-transition-duration: 200ms;
  -o-transition-duration: 200ms;
}


</style>
