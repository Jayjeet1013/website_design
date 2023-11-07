import Section_2 from "@/components/home/Section_2";
import Section_3 from "@/components/home/Section_3";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Website_design</title>
        <meta
          name="description"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Section_2/>
<Section_3/>

    
    </>
  );
}
