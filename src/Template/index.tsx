import { Head, Html, Text, Section, Preview, Container, Row, Column, Body, Link, Button } from "@react-email/components";
import { FC } from 'react';
import '../style.css';

export const Template: FC<{}> = ({ }) => {

  const main = {
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    backgroundColor: '#ffffff',
  };

  const container = {
    margin: '0 auto',
    padding: '20px 0 48px',
    width: '660px',
  };

  const heading = {
    fontSize: '32px',
    lineHeight: '1.3',
    fontWeight: '700',
    color: '#484848',
  }

  const paragraph = {
    fontSize: '18px',
    lineHeight: '1.4',
    color: '#484848',
  }

  const link = {
    ...paragraph,
    color: '#ff5a5f',
    display: 'inline-block',
  }

  const button = {
    ...paragraph,
    backgroundColor: '#ff5a5f',
    color: '#ffffff',
    padding: '6px',
    borderRadius: '3px',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center' as const,
    display: 'block',
  }

  return (
    <Html>
      <Head>
        <title>My email title</title>
      </Head>
      <Preview>Your confirmation</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Text style={heading}>Pariatur consequat sint elit</Text>

              <Text style={paragraph}>Nulla officia dolore amet anim sit est occaecat elit nostrud mollit minim mollit magna.</Text>

              <Text style={paragraph}>Exercitation ut id fugiat ut. Labore enim eu adipisicing occaecat aliqua consequat aute. Sint elit ea quis labore consequat et <Link style={link} href="https://bbc.co.uk">laborum cupidatat</Link> consectetur nisi esse cupidatat ipsum mollit. Pariatur et dolor anim mollit. Incididunt cillum cupidatat consequat culpa consequat magna sunt consequat laborum elit ex commodo pariatur. Voluptate anim nulla enim officia id exercitation esse.</Text>

              <Button pX={12} pY={12} style={button} href="https://bbc.co.uk">Call to action</Button>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
