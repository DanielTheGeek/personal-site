import Head from "next/head";

const name = "Daniel Omoniyi";
export const siteTitle = "Daniel Omoniyi";

export default function Layout({ children, home }) {
  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Daniel Omoniyi is a Software Engineer based in Lagos, Nigeria."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        {children}
      </div>
    </div>
  );
}
