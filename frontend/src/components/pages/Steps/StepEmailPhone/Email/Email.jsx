import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import ButtonX from '../../../../Shared/Button/Button';
import CardX from '../../../../Shared/Card/Card';


const Email = ({onNext}) => {

    const [email , setEmail] = useState('')

    return (
        <div>
            <CardX title="Enter your email id" icon="emailid">
                <Input
                    onChange={(event)=> setEmail(event.target.value)}
                    value = {email}
                    width="240px"
                    type="email"
                    className="input_box "
                    placeholder="easinwebpro@gmail.com"
                    color="#262626"/>
                <ButtonX onClick={() => onNext(2)} text="Next"/>
                <p>By entering your number, you’re agreeing to our Terms of Service and Privacy Policy. Thanks!</p>
            </CardX>
        </div>
    )
}

export default Email
