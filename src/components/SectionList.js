import React from 'react';
import Section from './Section'

export default function SectionList({ sections }) {
  const sectionElements = sections.map(section =>
    <li key = {section.id}><Section section = {section}/></li>

  )
  return (
    <ul>
      <SectionList />
    </ul>
  )
}