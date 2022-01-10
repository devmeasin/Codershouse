import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendOtp } from '../../../../../http';
import { setOtp } from '../../../../../store/authSlice';
import ButtonX from '../../../../Shared/Button/Button';
import CardX from '../../../../Shared/Card/Card';
import styles from '../EmailPhone.module.css';

const Phone = ({onNext}) => {

    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();

    const sendOtpHandler = async(e) => {

      try {

        let {data} = await sendOtp({phone});
        dispatch(setOtp(data));
        console.log(data);
        onNext(2)

      } catch(error) {
          console.log(error);
      }

    }

    return (
        <div>
            <CardX title="Enter you phone number" icon="tel">
                <div className={styles.phonewrapper}>
                    <Input
                        onChange={(event) => setPhone(event.target.value)}
                        value={phone}
                        width="240px"
                        className="input_box "
                        placeholder="+88019000000"
                        color="#262626"/>
                    <ButtonX onClick={(_) =>  sendOtpHandler()} text="Next"/>
                    <p>By entering your number, you’re agreeing to our Terms of Service and Privacy
                        Policy. Thanks!</p>
                </div>
            </CardX>
        </div>
    )
}

export default Phone
