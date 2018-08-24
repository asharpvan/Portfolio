<template>
  <!-- Your HTML goes here -->
  <div class="wrapper">
    <div class="baseview">
      <p>Throughout my career, I am lucky enough to have some of the applicaions that I have developed get featured on various news segments and publications.</p> 
      <p> Following are the list of selective few. Click on the titles, to read more about the work I've been involved with.</p>
      <div class="follow">
        <ul>
          <li><a href="https://microsoft.github.io/techcasestudies/iot/2016/11/29/Agatsa.html">Microsoft</a></li>
          <li><a href="https://blogs.oracle.com/cloud-platform/oracle-blockchain-cloud-service-in-the-newsagain">Orcale</a></li>
          <li><a href="https://www.outlookbusiness.com/specials/indian-innovation/heart-of-the-matter-2974">Outlook Business</a></li>
          <li><a href="https://economictimes.indiatimes.com/small-biz/startups/noida-based-agatsa-software-develops-credit-card-sized-healthcare-device-sanket/articleshow/49241627.cms">Economic Times</a></li>
          <li><a href="https://www.huffingtonpost.in/the-better-india/anyone-anywhere-can-now-get-an-ecg-report-in-15-seconds_a_21473867/">Huffington Post</a></li>
          <li><a href="https://blocktribune.com/blockchain-oracle-powers-next-generation-lending-model/">Block Tribune</a></li>
          <li><a href="https://www.prnewswire.com/news-releases/aurablocks-partners-with-biz2credit-demonstrates-next-generation-lending-on-oracle-blockchain-cloud-service-at-oracle-openworld-2017-300565411.html">PR Newswire</a></li>
          <li><a href="https://m.dailyhunt.in/news/india/english/yourstory-epaper-yourstory/agatsa+s+pocket+sized+monitor+sanketlife+gives+early+warning+of+heart+trouble-newsid-71490113">Daily Hunt</a></li>
          <li><a href="https://www.thebetterindia.com/51302/sankeft-ecg-monitor-health-heart-disease/this-is-only-the-fourth-species-of-bird-discovered-in-india-since-independence-23/">The Better India</a></li>
          <li><a href="https://inc42.com/startups/sanket/">Inc. 42</a></li>
        </ul>
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
  width: 95%;
  margin: auto;
  padding-top: 60px;
  text-align: center;
  /* background-color: red; */
}

a {
  font-weight: 900;
  color: #000000;
  text-decoration: none
}

ul {
  list-style-position: inside;
  margin: auto;
  padding-left:0;
  width: 50%;
 /* background-color: green; */
  /* text-align: center; */
}
li {
  list-style: none;
  padding: 1em;
  -webkit-transition: 0.1s ease-in-out, 
  -webkit-transform 0.1s ease-in-out;
  -moz-transition:  0.1s ease-in-out, 
  -moz-transform 0.1s ease-in-out;
  transition: all 0.1s ease-in-out, 
  transform 0.1s ease-in-out,;
  /* background-color: red; */
}

li:hover {
  transform: scale(2.0); 
}
</style>
