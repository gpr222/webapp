const config = {
  cms_manual_init: true,
  backend: {
    name: 'github',
    repo: 'gpr222/webapp',
    branch: 'main',
  },
  media_folder: 'public/img',
  public_folder: 'img',
  collections: [
    {
      name: 'blogs',
      label: 'Blogs',
      folder: 'content/blogs',
      create: true,
      slug: "{{slug}}",
      fields: [
        {
          label: "Layout",
          name: "layout",
          widget: "hidden",
          default: "blog"
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
        },
        {
          label: 'Poster',
          name: 'poster',
          widget: 'image',
        },
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
        },
        {
          label: 'Excerpt',
          name: 'excerpt',
          widget: 'string',
        },

        
      ],

    },

    {
      name: 'events',
      label: 'Events',
      folder: 'content/events',
      create: true,
      slug: "{{slug}}",
      fields: [
        {
          label: "Layout",
          name: "layout",
          widget: "hidden",
          default: "event"
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        {
          label: 'Body',
          name: 'body',
          widget: 'markdown'
        },
        {
          label: 'Poster',
          name: 'poster',
          widget: 'image',
        },
        
        

        
      ],

    },

    {
      name: 'publications',
      label: 'Publications',
      folder: 'content/publications',
      create: true,
      slug: "{{slug}}",
      fields: [
        {
          label: "Layout",
          name: "layout",
          widget: "hidden",
          default: "publication"
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
        },
        {
          label: 'File',
          name: 'file',
          widget: 'file',
        },
        
        

        
      ],

    },

    {
      name: 'projects',
      label: 'Projects',
      folder: 'content/projects',
      create: true,
      slug: "{{slug}}",
      fields: [
        {
          label: "Layout",
          name: "layout",
          widget: "hidden",
          default: "project"
        },
        {
          label: 'Title',
          name: 'title',
          widget: 'string',
        },
        
        {
          label: 'Author',
          name: 'author',
          widget: 'string',
        },
        {
          label: 'Poster',
          name: 'poster',
          widget: 'image',
        },
        {
          label: 'Link',
          name: 'link',
          widget: 'string',
        },

        
        

        
      ],

    },
  ],
};

export default config