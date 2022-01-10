import { Button } from '@nextui-org/react';
import styles from './Button.module.css';
const ButtonX = ({text , onClick}) => {
    return (
        <div className={styles.buttonwrapper}>
            <Button onClick={onClick} className={styles.button} rounded>
                {text} 
                <img src="/src/images/arrow.png" alt="arrow" />
            </Button>
        </div>
    )
}


export default ButtonX;