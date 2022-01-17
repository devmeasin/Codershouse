import { Input } from '@nextui-org/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { verifyOtp } from '../../../../http';
import { setAuth } from '../../../../store/authSlice';
import ButtonX from '../../../Shared/Button/Button';
import CardX from '../../../Shared/Card/Card';

const StepOtp = () => {

    const [otp, setOtp] = useState('');
    const notify = (e) => toast.error("OTP Valid");

    const dispatch = useDispatch();

    const {phone, hash} = useSelector((state) => state.auth.otp)

    const verifyOtpHandler = async () => {

        try {
            const res = await verifyOtp({otp, phone, hash});
            if(res.status === 200) {
                dispatch(setAuth(res.data));
                console.log(res);
            } 

        } catch (e) {
            notify()
            console.log(e.message);
        }

    }

    return (
        <div className="card-wrapper-center">
            <CardX title="Enter the code we just texted you" icon="otp">
                <div>
                    <Input
                        onChange={(event) => setOtp(event.target.value)}
                        value={otp}
                        width="240px"
                        className="input_box "
                        placeholder="8181"
                        color="#262626"/>
                    <ButtonX onClick={verifyOtpHandler} text="Next"/>
                    <ToastContainer/>
                </div>
            </CardX>
        </div>
    )
}

export default StepOtp
