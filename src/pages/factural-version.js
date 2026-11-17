import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}/factural-version`;
const OG_IMAGE = `${SITE_URL}/api/og-factural`;

const TITLE = "Buyer Notice: 1989 Porsche 911 Carrera 25th Anniversary (VIN WP0AB091XKS121085)";
const DESCRIPTION =
  "Considering this 1989 Porsche 911 Carrera 25th Anniversary Edition? The seller previously agreed to sell it on Bring a Trailer, then backed out without explanation. Read what happened.";

export default function FacturalVersion() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="1989 Porsche 911 Carrera 25th Anniversary — VIN WP0AB091XKS121085" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
      </Head>

      <main className={`${inter.className}`}>
        <header className={`bg-black`}>
          <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
            <h1 className={`text-white text-2xl md:text-3xl font-extrabold my-8`}>
              1989 Porsche 911 Carrera Coupe 25th Anniversary Edition
            </h1>
            <p className={`text-gray-300 mb-4`}>VIN WP0AB091XKS121085</p>
          </div>
        </header>

        <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
          <figure className={`my-8 max-w-md`}>
            <Image
              src={`/images/porsche-911-carrera-1989.jpg`}
              alt={`Silver 1989 Porsche 911 Carrera coupe (representative photo, not the actual vehicle)`}
              width={1280}
              height={853}
              className={`w-full h-auto rounded`}
              priority
            />
            <figcaption className={`text-sm text-gray-500 mt-2`}>
              Representative photo of a 1989 Porsche 911 Carrera, not the actual vehicle. Photo:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:1989_Porsche_911_Carrera_(16485353527).jpg"
                className={`underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeremy from Sydney, Australia
              </a>
              , licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by/2.0/"
                className={`underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY 2.0
              </a>
              .
            </figcaption>
          </figure>

          <h2 className={`text-3xl font-extrabold mb-8`}>Summary</h2>
          <p className={`mb-8`}>
            The seller, Frank Forelle of Wyoming, agreed to sell this vehicle through Bring a Trailer and then
            backed out of the sale. No explanation was given, and he stopped responding to follow-up messages.
          </p>

          <h2 className={`text-3xl font-extrabold mb-8`}>What Happened</h2>
          <ol className={`pl-6 mb-8 list-decimal`}>
            <li className={`mb-4`}>The vehicle was listed on Bring a Trailer.</li>
            <li className={`mb-4`}>The sale was agreed.</li>
            <li className={`mb-4`}>The seller backed out of the sale.</li>
            <li className={`mb-4`}>Follow-up attempts were made; no response was received.</li>
          </ol>

          <h2 className={`text-3xl font-extrabold mb-8`}>Club Contact</h2>
          <p className={`mb-8`}>
            The seller is a former director of the Porsche Club of America, Yellowstone Region. The club was
            informed of the situation and did not respond.
          </p>

          <div className={`border-l-4 border-red-600 pl-4 mb-8`}>
            <h2 className={`text-2xl font-extrabold mb-4`}>Buyer Notice</h2>
            <p>
              If you are considering buying VIN WP0AB091XKS121085, be aware this seller previously backed out of
              an agreed sale.
            </p>
          </div>
        </div>

        <footer className={`bg-black`}>
          <div className={`max-w-2xl mx-auto p-6 lg:px-6 lg:max-w-7xl`}>
            <p className={`text-center text-white font-bold`}>2025</p>
          </div>
        </footer>
      </main>
    </>
  );
}
