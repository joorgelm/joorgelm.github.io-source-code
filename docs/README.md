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

bio:  
email: melgarejo.colarte@gmail.com
---

<ProfileSection :frontmatter="$page.frontmatter" />

## Sobre mim

Apaixonado por computação, atualmente estou concluindo minha graduação, possuo experiência em desenvolvimento web (Back-end e Front-end), machine learning (NLP).

Desenvolvimento de API's REST (Flask, Django, Laravel, Spring Boot), front-end (Vue.js com Vuex), banco de dados PostgreSQL, MySQL e Oracle, containers Docker, ferramentas Sklearn, H2O, Pandas, cloud Heroku, EC2.

## Projetos


[→ Ver todos](/projects/)

<ProjectCard hideBorder=true>

  **Compra Direta Eletrônica**  
  <p>Software de gestão de aquisições feitas na modalidade compra direta.</p>
  <br>

  **Tecnologias**
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
    .card-content ul
      margin-top 0px

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
