import React from 'react'
import Section from './Section'
import sections from '../dictionary';
import 'bootstrap/dist/css/bootstrap.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

function First() {
  return (
    <div className="container menu">
      <ul className="menu__lists">
        <li className="menu__list">About myself</li>
        <li className="menu__list">Skills</li>
        <li className="menu__list">Portfolio</li>
        <li className="menu__list">Contacts</li>
      </ul>
      <Section section={sections[0]} />

      <Tabs>
        <TabList>
          <Tab>About myself</Tab>
          <Tab>Skills</Tab>
          <Tab>Portfolio</Tab>
          <Tab>Contacts</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
          <Section section={sections[0]} />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
          <Section section={sections[1]} />
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default First