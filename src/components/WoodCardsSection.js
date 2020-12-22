import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import AspectRatio from "./AspectRatio";

function WoodCardsSection(props) {
  const items = [
    {
      image: "https://source.unsplash.com/aHrxrT1q2h0/800x600",
      title: "Kestane Kereste Tomruk",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/agac-kereste-tomruk-turleri/kestane-kereste-tomruk",
    },
    {
      image: "https://source.unsplash.com/BkmdKnuAZtw/800x600",
      title: "Meşe Kereste Tomruk",
      body:
        "Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec.",
      url: "/post/beach",
    }
    
  ];

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Row className="justify-content-center">
          {items.map((item, index) => (
            <Col xs={12} md={6} lg={3} className="py-3" key={index}>
              <LinkContainer to={item.url}>
                <Card as="a" text="dark" className="text-decoration-none">
                  <AspectRatio ratio={1 / 0.75}>
                    <Card.Img src={item.image} alt={item.title} variant="top" />
                  </AspectRatio>
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                  </Card.Body>
                </Card>
              </LinkContainer>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

export default WoodCardsSection;
