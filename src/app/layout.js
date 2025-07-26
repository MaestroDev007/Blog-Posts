import { myFontLato, myFontBoldLato, myFontBoldJS, myFontJS } from "@/lib/font";
import MuiThemeProvider from "@/provider/muiThemeProvider";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { QueryProvider } from "@/provider/QueryProvider";
import { BlogProvider } from "@/provider/BlogProvider";

export const metadata = {
  title: "Express Creativity With MindStitch",
  description:
    "blogapp to express your intellectual creativity and share your thoughts with the world.",
  author: "MaestroDev007",
  keywords: "Blog, Blog Posts, Next.js, React, Web Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${myFontJS.variable} ${myFontLato.variable} ${myFontBoldLato.variable} ${myFontBoldJS.variable} relative`}>
        <QueryProvider>
          <BlogProvider>
            <MuiThemeProvider>
              <NavBar />
              {children}
            </MuiThemeProvider>
          </BlogProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
