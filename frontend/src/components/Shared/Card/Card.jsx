import { Card } from '@nextui-org/react';
import styles from './Card.module.css';

const CardX = ({title = '' , icon , children}) => {
    return (
        <div className={styles.cardwrapper}>
            <Card color='#1D1D1D' className={styles.card}>
                <Card.Body noPadding="noPadding">
                    <div className={styles.card_body}>
                        <div className={styles.card_title}>
                           {icon && <img src={`/src/images/${icon}.png`} alt="icon"/>}
                            <h5>{title}</h5>
                        </div>
                        {
                            children
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}


export default CardX;