import React from 'react';

const scroll = (id) => document.getElementById(id).scrollIntoView({ behavior: 'smooth' });

export const AnchorLink = ({ targetId, children }) => (
  <div onClick={() => scroll(targetId)}>
    {children}
  </div>
);
