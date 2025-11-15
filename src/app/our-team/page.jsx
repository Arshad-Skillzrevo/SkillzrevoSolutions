import React from 'react'
import FounderSection from '../about-us/FounderSection'
import PaulamiProfile from '../components/PaulamiProfile'
import TrainersCarousel from '../components/TrainerGrid'
import TeamHero from '../components/TeamHero'

const page = () => {
  return (
    <div>
      <TeamHero />
      <div id='team-section'/>
      <FounderSection />
      <PaulamiProfile />
      <TrainersCarousel />
    </div>
  )
}

export default page 