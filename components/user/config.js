module.exports = {
  // component name
  name: 'user',

  // route path
  path: '/',

  // webpack amd externals
  externals: [
    {
      name: 'antd',
      amd: 'antd',
      root: 'antd',
    },
  ],

  output: '[name]/[version]/index.js',

  // global container
  global: {
    // global store
    store: {
      name: 'humpback',
    },

    // global dispatcher
    dispatcher: {
      setName: async ({ dispatch }, name) => {
        await new Promise((r) => setTimeout(r, 300))
        dispatch({ name })
      },
      getName({ getStore }) {
        return getStore().name
      },
    },
  },

  // test component
  component: {
    // test component name
    name: 'component-test',

    // test component store
    store: {
      message: 'test',
    },

    // test component dispatcher
    dispatcher(dispatch, getStore) {
      return {
        setMessage(message) {
          dispatch({ message })
        },
        getMessage() {
          return getStore().message
        },
      }
    },
  },
}
