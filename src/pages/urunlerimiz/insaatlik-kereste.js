import React from "react";
import FeaturesSection2 from "./../../components/FeaturesSection2";
import CarouselSection from "./../../components/CarouselSection";
import CtaSection from "./../../components/CtaSection";
import { useRouter } from "./../../util/router.js";

function UrunlerimizInsaatlikKerestePage(props) {
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
      <CarouselSection
        items={[
          {
            image: "http://source.unsplash.com/7v_lSDRaOO0/1200x600",
            caption: "Caption for the first image",
          },
          {
            image: "http://source.unsplash.com/PvCO2IXlXBs/1200x600",
            caption: "Caption for the second image",
          },
          {
            image: "http://source.unsplash.com/KgjcndVr7tU/1200x600",
            caption: "Caption for the third image",
          },
        ]}
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
    </>
  );
}

export default UrunlerimizInsaatlikKerestePage;
