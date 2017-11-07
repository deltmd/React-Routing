import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Contact from './components/Contact/Contact';
import About from './components/About/About';
import FAQ from './components/About/FAQ/FAQ';
import Company from './components/About/Company/Company';
import Home from './components/Home/Home';
import People from './components/People/People';
import Character from './components/Character/Character';
import Missing from './components/Missing/Missing';

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='/about' render={() => (
      <div>
        <About>
          <Route path='/about/company' component={Company} />
          <Route path='/about/faq' component={FAQ} />
        </About>
      </div>
    )} />
    <Route path='/people/:id' component={Character} />
    <Route path='/people' component={People} />
    <Route path='/' component={Missing} />
  </Switch>
)
