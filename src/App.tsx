import { FC } from 'react';
import { Template } from './Template';
import { render } from '@react-email/render';

import './style.css';

const html = render(<Template />, {
  pretty: true,
});

console.log(html);

export const App: FC<{}> = ({}) => {
  return (
    <div className="app">
      <Template />
      <p>Here is the output:</p>
      {html}
    </div>
  );
};
