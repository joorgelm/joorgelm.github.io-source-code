---
pageClass: home-page
# some data for the components

name: Jorge Melgarejo
profile: /profile.jpg

socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/joorgelm
  - title: linkedin
    icon: "/icons/linkedin-mono.svg"
    link: https://www.linkedin.com/in/jlmelgarejo/
  - title: instagram
    icon: "/icons/instagram-mono.svg"
    link: https://www.instagram.com/joorgelm/

# cv: https://en.wikipedia.org/wiki/Harry_Potter
bio:   
email: melgarejo.colarte@gmail.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About me

Passionate about computing, I am currently concluding my graduation, experience in web development (Back-end and Front-end), machine learning (NLP).

Development of REST API's (Flask, Django, Laravel, Spring Boot), front-end (Vue.js with Vuex), PostgreSQL database, MySQL and Oracle, Docker containers, Sklearn tools, H2O, Pandas, cloud Heroku, EC2.

## Projects


[→ Full list](/projects/)

<ProjectCard hideBorder=true>

  **Compra Direta Eletrônica**  
  <p>Government procurement management software.</p>
  <br>

  **Technologies**
  - Docker
  - Java
  - Git
  - Spring / Spring Boot
  - VueJS
  - PostgreSQL / Mongo / SQLServer / OracleDB

</ProjectCard>

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
