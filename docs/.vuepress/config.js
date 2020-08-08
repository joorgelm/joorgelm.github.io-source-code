module.exports = {
  title: "Jorge Melgarejo",
  description: "Jorge Melgarejo.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    search: false,
    locales: {
      '/': {
        selectText: 'Idiomas',
        nav: [
          { text: "Início", link: "/" },
          { text: "Sobre", link: "/about/" },
          { text: "Projetos", link: "/projects/" },
          { text: "GitHub", link: "https://github.com/joorgelm" }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      },
      '/en/': {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "About", link: "/en/about/" },
          { text: "Projects", link: "/en/projects/" },
          { text: "GitHub", link: "https://github.com/joorgelm" }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      }
    }
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  },
  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'Jorge Melgarejo'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Jorge Melgarejo'
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}

