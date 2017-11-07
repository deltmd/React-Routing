import React from 'react';
import {Link} from 'react-router-dom'

export default function About(props) {
  return (
    <div>
      <h1>This is the About component</h1>
      TODO input routes to sub about section
      TODO use props.children to sepcify where subroutes should go.
      
      <nav>
        <Link to='/about/company'>Company</Link>
        <Link to='/about/faq'>FAQ</Link>
      </nav>

        {props.children}

    </div>
  )
}
