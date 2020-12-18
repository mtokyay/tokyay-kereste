import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import Announcement2 from "./../components/Announcement2";
import { useRouter } from "./../util/router.js";

function YasalBilgilerPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection2
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
      <Announcement2
        variant="white"
        text="An important announcement!"
        buttonText="Get Started"
        buttonColor="primary"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/pricing");
        }}
      />
    </>
  );
}

export default YasalBilgilerPage;
