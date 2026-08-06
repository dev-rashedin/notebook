import { todayStamp } from '@/lib'
import React from 'react'

const SectionIntro = () => {
  return (
    <div className="flex items-center justify-between gap-8 lg:gap-16 xl:gap-24 uppercase tracking-widest text-foreground/80 text-[9px]">
          <span>Vol. I — No. 001</span>
          <span>{todayStamp()}</span>
        </div> 
  )
}

export default SectionIntro