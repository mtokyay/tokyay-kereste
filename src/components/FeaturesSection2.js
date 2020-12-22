import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FeaturesSection2(props) {
  const items = [
    {
      title: "Genel Özellikleri",
      subtitle:
        "Kestane Kereste en fazla göze hitap eden kereste çeşididir. Sağlam ve doğal yapısı sayesinde mobilya sektöründe öncelikli olarak tercih edilmektedir. Rengi açık-koyu kahverengi ve grimsi sarıdır.",
      iconClass: "fas fa-gem",
      iconColor: "warning",
    },
    {
      title: "Ayrıntılar",
      subtitle:
        " Mukavemeti yüksektir ve kolay işlenebilir. Uzun iplikli olduğu için kolayca bükülmektedir, esnektir. Neme dayanıklıdır. Çivi ve tutkalla iyi bağlantı kurar. Kolay verniklenir ve boyanır. ",
      iconClass: "fas fa-charging-station",
      iconColor: "danger",
    },
    {
      title: "Kullanım Alanları",
      subtitle:
        "Kullanım alanları Suya dayanıklı yapısı sayesinde deniz araçlarında, köprü ayaklarında ve iskele yapımında kullanılmaktadır. Aynı zamanda doğramacılık, iç dekorasyon, ahşap merdiven yapımı, ahşap ev yapımı, parke, deck, bahçe masası, pergole ve çardak yapımı gibi pek çok kullanım alanına sahiptir. ",
      iconClass: "fas fa-adjust",
      iconColor: "primary",
    },
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} lg={4} className="px-4" key={index}>
              <div className="py-3">
                <div className={`text-${item.iconColor} display-4 mb-4`}>
                  <i className={`${item.iconClass}`} />
                </div>
                <h4 className="mb-4">{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default FeaturesSection2;
