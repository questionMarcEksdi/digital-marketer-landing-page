module.exports = {
  mode: 'jit',
  content: ["index.html"],
  theme: {
    extend: {
      backgroundImage: {
        image: `url('../images/pexels-fauxels-3184611.jpg')`,
      },
      backgroundSize: {
        full: `100%`
      },
      backgroundRepeat: {
        norepeat: `no-repeat`
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
  ],
}
