import Head from "next/head";
import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionOne from "@/components/section-one";
import SectionTwo from "@/components/section-two";
import SectionThree from "@/components/section-three";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export default function Home() {
  return (
    <>
      <Head>
        <title>Remitt</title>
        <meta name="description" content="#" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        {/* VIDEO  */}
        <SectionOne />
        {/* TRABAJAMOS PARA INPULSAR */}
        <SectionTwo />
        <SectionThree />
        <Footer />
      </Layout>
    </>
  );
}
