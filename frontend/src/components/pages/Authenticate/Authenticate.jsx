import React, { useState } from 'react';
import StepEmailPhone from '../Steps/StepEmailPhone/StepEmailPhone';
import StepOtp from '../Steps/StepOtp/StepOtp';

const steps = {
    1: StepEmailPhone,
    2: StepOtp,
}

const Authenticate = () => {

    const [step, setStep] = useState(1);
    const onNext = (stepNumber) => {
        setStep(stepNumber)
    }

    const Step = steps[step];

    return (<div>
        <Step onNext={onNext}/>
    </div>)
}

export default Authenticate;
