import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activate } from '../../../../http';
import { setAvatar } from '../../../../store/activateSlice';
import { setAuth } from '../../../../store/authSlice';
import ButtonX from '../../../Shared/Button/Button';
import CardX from '../../../Shared/Card/Card';
import styles from './StepAvatar.module.css';



const StepAvatar = ({onNext}) => {

    const dispatch = useDispatch();
    const {name , avatar} = useSelector((state) => state.activate)
    const [image , setImage] = useState( avatar || '/src/images/man.png' );

    const imageCaptureHandler = (event) => {

        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImage(reader.result);
                dispatch(setAvatar(reader.result));
            }
        }
    }

    const activatedHandler = async () => {
        
        if(name || avatar) {

            try {
                const {data} = await activate({name , avatar});

                if(data.auth) {
                    dispatch(setAuth(data));
                }

            } catch (err){
                console.log(err);
            }

        }
            
    }

    return (
        <div className="card-wrapper-center">

               <CardX title={`Okay, ${name}`} icon="monkey">
                   <div className ={styles.avatar_wrapper}>
                        <p>How’s this photo?</p>
                        <div className={styles.image_wrapper}>
                            <img src={image}/>
                        </div>
                        <label htmlFor="avatar" className={styles.avatar_label}>
                            Choose a different photo
                        </label>
                        <input onChange={imageCaptureHandler} id ="avatar" type="file" hidden/>

                       <ButtonX onClick={activatedHandler} text="Next"/>

                   </div>
               </CardX>
        </div>
    )
}

export default StepAvatar;
