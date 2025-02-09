// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.unmount();
    
    // ReactDOM.render(<Thing />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });
});
