module.exports = api => {
  const isTest = api.env('test')

  if (isTest) {
    return {
      'presets': [
        '@babel/react',
        '@babel/typescript',
        [
          '@babel/env',
          {
            'targets': {
              'node': 'current',
            },
          },
        ],
      ],
      'plugins': [
        'babel-plugin-styled-components',
      ],
    }
  }

  return {
    'presets': [
      '@babel/react',
      '@babel/typescript',
      [
        '@babel/env',
        {
          'targets': {
            'node': 'current',
          },
        },
      ],
    ],
    'plugins': [
      'babel-plugin-styled-components',
    ],
  }
}
