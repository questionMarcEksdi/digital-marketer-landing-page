module.exports = {
  mode: 'jit',
  content: ["index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
