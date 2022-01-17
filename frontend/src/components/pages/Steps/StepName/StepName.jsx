import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setName } from '../../../../store/activateSlice';
import ButtonX from '../../../Shared/Button/Button';
import CardX from '../../../Shared/Card/Card';


const StepName = ({onNext}) => {

    const dispatch = useDispatch();
    const name = useSelector((state) => state.activate.name);
    const [fullName , setFullName] = useState(name);

    const onNextHandler = () => {

        if(!fullName){
            return;
        } 
        dispatch(setName(fullName));
        onNext(2)
    }

    return (
           <div className="card-wrapper-center">
               <CardX title="What’s your full name?" icon="goggle">
                   <div>
                       <Input
                           onChange={(event) => setFullName(event.target.value)}
                           value={fullName}
                           width="240px"
                           className="input_box"
                           placeholder="Your Name"
                           color="#262626"/>
                        <p>People use real names at codershouse ':)'</p>
                       <ButtonX onClick={onNextHandler} text="Next"/>
                   </div>
               </CardX>
           </div>
    )

}

export default StepName
