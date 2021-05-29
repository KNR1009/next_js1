import Head from "next/head";
import Link from "next/LInk";

const Layout = ({ children, title = "HP by Next.js" }) => {
  return (
    <div className="flex min-h-screen py-0 px-2 flex-col justify-center items-center text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className={"bg-gray-800 w-screen"}>
          <div className="flex items-center p-3 justify-between ">
            <p class="text-white">ロゴ</p>
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 ">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2">
                  BLOG
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
    </div>
  );
};

export default Layout;
