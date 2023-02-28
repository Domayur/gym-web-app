import React from 'react'
import Footer from '../../components/Footer/Footer'
import SubHeader from '../../components/SubHeader/SubHeader'
import GetReadyToBlinkFitness from '../../PagesComponents/GetReadyToBlinkFitness'

import '../SetAccount/SetAccount.css'
const SetAccount = () => {
  return (
    <>
      <SubHeader />
      <section className='setAccount-section p-4'>
           <GetReadyToBlinkFitness />
       </section>
      <Footer />
    </>
  )
}

export default SetAccount