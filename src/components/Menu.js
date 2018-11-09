import React from 'react'
import Section from './Section'
import sections from '../dictionary';


function First() {
  return (
    <div class="menu">
      <ul>
        <li>About myself</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>Contacts</li>
      </ul>
      <Section section={sections[0]} />
    </div>
  )
}

export default First