---
pageClass: about-page
description: 'The biography and information about me.'
avatar: /profile.jpg
head: 'Jorge Melgarejo'
info: 'Web developer'
socials:
- title: github
  link: https://github.com/joorgelm
- title: linkedin
- title: medium
  link: https://medium.com/@joorge.lm
- title: stack-overflow
  link: https://stackoverflow.com/users/10568513/jorge-lu%c3%ads-melgarejo
- title: email
  link: 'mailto:melgarejo.colarte@gmail.com'
actions:
- text: Projects
  link: /projects/
- text: Resume
  link: /cv/cv.pdf
footer: Made with ♥ by Fing. Powered by VuePress
---

<AboutCard :frontmatter="$page.frontmatter" >
<!-- I attended [Hogwarts School of Witchcraft and Wizardry](https://en.wikipedia.org/wiki/Hogwarts) to study witchcraft, supervised by **Dumbledore** and other professors. I'm trying my best to battle with Lord Voldemort, the evil Wizard that we all fear. My research area includes Defence Against the Dark Arts and other magic. :dizzy: -->

</AboutCard>

<style lang="stylus">

.theme-container.about-page .page
  background-color #e6ecf0
  min-height calc(100vh)
  
  .last-updated
    display none

</style>