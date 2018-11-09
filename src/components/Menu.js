import React from 'react'
import Section from './Section'
import sections from '../dictionary';
import 'bootstrap/dist/css/bootstrap.css'

function First() {
  return (
    <div class="container menu">
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