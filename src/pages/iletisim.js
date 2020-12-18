import React from "react";
import ContactSection from "./../components/ContactSection";

function IletisimPage(props) {
  return (
    <ContactSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Bize Ulaşın."
      subtitle="Kereste ahşap hakkında öğrenemk istediğiniz her şey için bize ulaşabilirsiniz. Ayrıca fiyat teklifide alabilirsiniz."
      buttonText="Mesajımı Gönder"
      buttonColor="primary"
      showNameField={false}
      embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3333.176569329384!2d115.64515051624444!3d-33.340336599257625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a2e1d6e1f2832f7%3A0xe4813eb823ccbe30!2sFlorist+Gump!5e0!3m2!1sen!2sus!4v1564947283991!5m2!1sen!2sus"
    />
  );
}

export default IletisimPage;
