import React from 'react';

// functional component
// If we're not using state and/or lifecycle hooks (component will mount, etc... ) we can use a functional component
// just a function that returns JSX

export default function Contact() {
  return (
    <div>
      <h1>This is the Contact component</h1>
      <p> Please tell us about yourself. <input type="email" placeholder="email"/></p>
    </div>
  )
}
