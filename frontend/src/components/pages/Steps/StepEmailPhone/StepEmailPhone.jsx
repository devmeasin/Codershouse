import React, { useState } from 'react';
import Email from './Email/Email';
import styles from './EmailPhone.module.css';
import Phone from './Phone/Phone';

const StepEmailPhone = ({onNext}) => {

    const [toggle , setToggle] = useState('phone');
    return (

        <div className="card-wrapper-center">
            <div>
                <div className={styles.stepemailphone}>
                    <button className = {toggle === 'phone' && styles.active} onClick={() => setToggle('phone')}>
                        <img src="/src/images/phone.png" alt="phone_image"/>
                    </button>
                    <button className = {toggle === 'email' && styles.active} onClick={() => setToggle('email')}>
                         <img src="/src/images/email.png" alt="email_image"/>
                    </button>
                </div>
                {
                    toggle === 'phone' ? <Phone onNext={onNext}/>  : <Email onNext={onNext}/>
                }
            </div>
        </div>
    )
}

export default StepEmailPhone
