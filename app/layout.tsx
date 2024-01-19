import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import Footer from "@/components/footer";
import { getFooterDataContent } from "@/actions/data-content";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "SUGCON PH",
  description:
    "SUGCON PH (Sitecore User Group Philippines | Elevating Digital Experiences with AI and Web Development in ASIA",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const footerDataContent = await getFooterDataContent();
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
      (function(w, d, t, h, s, n) {
        w.FlodeskObject = n;
        var fn = function() {
          (w[n].q = w[n].q || []).push(arguments);
        };
        w[n] = w[n] || fn;
        var f = d.getElementsByTagName(t)[0];
        var v = '?v=' + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
        // Use unique ID and container for the first form
        var sm = d.createElement(t);
        sm.async = true;
        sm.type = 'module';
        sm.src = h + s + '.mjs' + v;
        f.parentNode.insertBefore(sm, f);
        var sn = d.createElement(t);
        sn.async = true;
        sn.noModule = true;
        sn.src = h + s + '.js' + v;
        f.parentNode.insertBefore(sn, f);
      })(window, document, 'script', 'https://assets.flodesk.com', '/universal', 'fd');
    `,
          }}
        ></script>
      </head>
      <body className={`${poppins.className} flex flex-col items-center`}>
        {children}
        <div id="contact"></div>
        <div className="bg-white w-full flex justify-center">
          <Footer data={footerDataContent} />
        </div>
      </body>
    </html>
  );
}
