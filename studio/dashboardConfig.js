export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6217c532e83db1009fb3bd79',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zoka3c6g',
                  apiId: '38c24b79-0cf4-49ab-a8d1-9a81f08a364a'
                },
                {
                  buildHookId: '6217c5328abe5b00aad86a64',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2ngbfzpt',
                  apiId: '3c60d087-98e8-45eb-9e0c-6bba7f81d086'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/clarefreeman/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2ngbfzpt.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
