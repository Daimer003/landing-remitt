import Head from "next/head";
import Layout from "@/components/layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionOne from "@/components/sections/section-one";
import SectionTwo from "@/components/sections/section-two";
import SectionThree from "@/components/sections/section-three";
import SectionFour from "@/components/sections/sectionFour";
import SectionFive from "@/components/sections/section-five";
import SectionSix from "@/components/sections/section-six";
import SectionSeven from "@/components/sections/section-seven";
import SectionNine from "@/components/sections/section-nine";
import Gradient from "@/components/sections/gradient";
import SectionEight from "@/components/sections/section-eight";
import SectionEleven from "@/components/sections/section-eleven";

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
        <Gradient right={-100} top={-200} background="var(--gradient-1)" />
        <Header />
        {/* VIDEO  */}
        <SectionOne />
        {/* TRABAJAMOS PARA INPULSAR */}
        <SectionTwo />

        <SectionThree />
        {/* ICONS */}
        <SectionEight />
        {/* ECOSYSTEMS */}
        <SectionFour />
        {/* ECOSISTEMA FINANCIERO */}
        <SectionFive />
        {/* GANANCIAS */}
        <SectionSix />

        <SectionSeven />

        <SectionEleven />

        <SectionNine />
      </Layout>

      <Footer />
    </>
  );
}
