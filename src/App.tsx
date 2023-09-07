import { FC } from 'react';
import { Template } from './Template';
import { render } from '@react-email/render';

import './style.css';

const html = render(<Template />, {
  pretty: true,
});

export const App: FC<{}> = ({ }) => {
  return (
    <div className="app">

      <div className="output">
        <p>This is what it would look like in an inbox:</p>
      <Template />

        <p>And this is the rendered HTML for the email:</p>
        <pre><code>{html}</code></pre>
      </div>
    </div>
  );
};
