import React from 'react'
import BackgroundText from './Background'
import LeadRequirements from './LeadRequirements'
import ContactCTA from '../home/Cta'
import QuickInquiry from '../home/Contactview'

export default function Leads() {
  return (
    <div>
        <BackgroundText/>
        <LeadRequirements/>
        <ContactCTA/>
        <QuickInquiry/>
    </div>
  )
}
