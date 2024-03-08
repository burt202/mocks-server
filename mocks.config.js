module.exports = {
  log: "info",
  mock: {
    routes: {
      delay: 1000,
    },
    collections: {
      selected: process.env.SELECTED_COLLECTION ?? "base",
    },
  },
  files: {
    babelRegister: {
      enabled: true,
    },
  },
}
