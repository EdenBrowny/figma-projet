import React from 'react'
import EventCount from './components/HeroSection-two'
import EventSection from './components/EventSection'
import FlexBox from './components/FlexBox'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Trainers from './components/Trainers'
import EventSchedule from './components/EventSchedule'
import EventGet from './components/EventGet'
import GrowthPlan from './components/GrowthPlan'
import Register from './components/Register'
import Finals from './components/Finals'


function App() {
  return (
    <>
<Header/>
<EventSection/>
<HeroSection/>
<EventCount />
<FlexBox/>
<Trainers/>
<EventSchedule/>
<EventGet/>
<GrowthPlan/>
<Register/>
<Finals />

</>
  )
}

export default App
