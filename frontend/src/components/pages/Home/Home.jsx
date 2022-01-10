import { useNavigate } from 'react-router-dom';
import ButtonX from '../../Shared/Button/Button';
import CardX from '../../Shared/Card/Card';
import styles from './Home.module.css';

const Home = () => {

    const navigate = useNavigate();
    const next = () => {
        navigate("authenticate");
    }

    return (

        <div className={`card-wrapper-center ${styles.homewrapper}`}>
            <CardX title="Welcome to Coders Room!" icon="logo">
                <p>We’re working hard to get Coders Room ready for everyone! While we wrap up
                    the finishing youches, we’re adding people gradually to make sure nothing breaks
                    :)
                </p>
                <ButtonX onClick={next} text="Let's Go"/> 
                 {/* <Link to="/signin" className={styles.link}>Have an invite text?</Link>
                <Link to="/signin" className={styles.link2}>Sign in</Link>  */}
            </CardX>
        </div>

    )
}

export default Home;