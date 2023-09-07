import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Section } from '@react-email/section';
import { FC } from 'react';
import '../style.css';

export const Template: FC<{}> = ({}) => {
  return (
    <Html>
      <Head>
        <title>My email title</title>
      </Head>
      <Section>
        <div className="email-template">
          <h1>This is a rendering of a React component</h1>
          <p>
            This project uses React Email to convert react pages into HTML
            friendly email.
          </p>
        </div>
      </Section>
    </Html>
  );
};
