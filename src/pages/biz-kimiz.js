import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import StatsSection from "./../components/StatsSection";
import CtaSection2 from "./../components/CtaSection2";
import Announcement from "./../components/Announcement";
import { useRouter } from "./../util/router.js";

function BizKimizPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="primary"
        textColor="white"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="We help you make money"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
      />
      <ClientsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="You're in good company"
        subtitle=""
      />
      <StatsSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
      />
      <CtaSection2
        bg="white"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <Announcement
        variant="white"
        text="An important announcement with"
        linkText="a link"
        linkOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default BizKimizPage;
