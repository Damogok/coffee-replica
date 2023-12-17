/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors :{
        'primary-brown' : '#30261c',
        'primary-white' : '#f1f0ee',
        'light-coffee' : '#e2d9c8',
      },
      backgroundImage: {
        'hero-image': "url('https://ik.imagekit.io/japcxa9ds/pexels-chevanon-photography-302899.jpg?updatedAt=1701001457736')",
        'coffee-bean': "url(https://ik.imagekit.io/japcxa9ds/picture%20coffee.png?updatedAt=1701122862049)",
      },
      fontFamily: {
        "poppins": ['poppins-thin'],
        "poppins-extralight": ['poppins-extralight'],
        "poppins-regular": ['poppins-Regular'],
        "poppins-medium": ['poppins-medium'],
        "poppins-semibold": ['poppins-semibold'],
        "poppins-bold": ['poppins-bold'],
        "poppins-extrabold": ['poppins-extrabold'],
        "copperplate": ['copperplate'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}