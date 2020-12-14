export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd6e0e5314ec19cee305164',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sn9qskb3',
                  apiId: '32e0e467-5755-4894-bf35-d113806a3cf4'
                },
                {
                  buildHookId: '5fd6e0e58fce2105b1889855',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5uni8fbo',
                  apiId: '098293a6-f192-43f3-a726-ee8ef30d199d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alifrio75/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5uni8fbo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
