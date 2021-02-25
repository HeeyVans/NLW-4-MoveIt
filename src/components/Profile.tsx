import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
    <div className={styles.profileContainer}>
        <img src="https://github.com/heeyvans.png" alt="Vanessa Oliveira"/>
        <div>
            <strong> Vanessa Oliveira </strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1
                </p>
        </div>
    </div>
    );
}