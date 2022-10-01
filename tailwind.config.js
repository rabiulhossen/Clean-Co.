/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#12CBC4",
        
"secondary": "#9980FA",
        
"accent": "#4b6584",
        
"neutral": "#39253C",
        
"base": "#30336b",
        
"info": "#ffaf40",
        
"success": "#18dcff",
        
"warning": "#F59629",
        
"error": "#EB1E5F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
