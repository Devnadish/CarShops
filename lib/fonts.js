import localFont from "next/font/local";

const Tajwal = localFont({
  src: [
    {
      path: "../fonts/tajwal/Tajawal-Regular.ttf",
      //   style: "normal",
    },
  ],
  variable: "--font-Tajwal",
});



const Cairo = localFont({
  src: [
    {
      path: "../fonts/Cairo/Cairo-VariableFont_slnt,wght.ttf",
      //   style: "normal",
    },
  ],
  variable: "--font-Cairo",
});


export { Tajwal, Cairo };
