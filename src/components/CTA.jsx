import React from 'react'
import styles,{layout} from '../style';
import {} from '../assets';
import Buttons from './Buttons';
import {} from '../constants';
const CTA = () =>  (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and gorw your business anywhere on the planet.</p>
      </div>
     <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Buttons/>
     </div>
      
   
    </section>
  )

export default CTA;
