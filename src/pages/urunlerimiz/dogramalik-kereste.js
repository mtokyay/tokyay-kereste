import React from "react";
import FeaturesSection2 from "./../../components/FeaturesSection2";
import CtaSection from "./../../components/CtaSection";
import CarouselSection from "./../../components/CarouselSection";
import { useRouter } from "./../../util/router.js";

function UrunlerimizDogramalikKerestePage(props) {
  const router = useRouter();

  return (
    <>
      <FeaturesSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
      <CtaSection
        bg="dark"
        textColor="light"
        size="sm"
        bgImage="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        bgImageOpacity={0.8}
        title="Check out our products"
        subtitle=""
        buttonText="Explore"
        buttonColor="light"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <CarouselSection
        items={[
          {
            image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/kereste/ithal-yerli-dogramalik-kereste/cam-ithal-1-sinif-10x15-dogramalik-kereste-tokyay-kereste.png.png",
            caption: "İthal Çam 1. sınıf 10x15 (10*15) Doğramalık Kereste",
          },
          {
            image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/kereste/ithal-yerli-dogramalik-kereste/ithal-1-sinif-5x18-dogramalik-kereste-tokyay-kereste.png.png",
            caption: "İthal Çam 1. sınıf 5x18 (5*18) Doğramalık Kereste",
          },
          {
            image: "https://tokyaykereste.s3.eu-central-1.amazonaws.com/kereste/ithal-yerli-dogramalik-kereste/ithal-cam-10x10-1-sinif-dogramalik-kereste-tokyay-kereste.png.png",
            caption: "İthal Çam 1. sınıf 10x10 (10*10) Doğramalık Kereste",
          },
        ]}
      />
    </>
  );
}

export default UrunlerimizDogramalikKerestePage;
