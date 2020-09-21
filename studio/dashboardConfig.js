export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f6882dc3e1e0858df75d8cf',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-645ayq43',
                  apiId: 'db7c7aa9-b127-49a9-b705-f60f9a6ac806'
                },
                {
                  buildHookId: '5f6882dc16d9f29f0c3d3dee',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z9zoipi3',
                  apiId: '133713fb-e9d2-4c3d-9424-1f9ccf8b4aa4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/surendraotpl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z9zoipi3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
