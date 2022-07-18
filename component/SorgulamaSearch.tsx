import { useState } from 'react';
import styles from '../styles/container-tracking/SorgulamaSearch.module.scss'



const SorgulamaSearch = (props: any) => {

    const [queryNumber, setQueryNumber] = useState('');

    return (
        <>
        
            <h1>{props.t('container-tracking')}</h1>
            
                <form className={styles.SorgulamaForm}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className='mb-2'>{props.t('Container Number')}/{props.t('Booking Number')}</label>
                        <div className='row'>
                            <div className='col-lg-9 col-12 pb-3'>
                                <input type="text" className="searcform-control w-100" value={queryNumber} onChange={event => setQueryNumber(event?.target.value)}
                                    aria-describedby="query" placeholder="Container Number/Booking Number" />
                            </div>
                            <div className={`{col-lg-3 col-4} ${styles.btnContainer}`}>
                                <button type='submit' className={styles.FormBtn} onClick={(e) => { e.preventDefault(); props.onSubmit(queryNumber) }}>{props.t("Search")}</button>
                            </div>
                        </div>
                        <div className={styles.vasif}>
                            <p>{props.t('Container Number')}: TRKU2000000</p>
                            <p>{props.t('Booking Number')} ve B/L {props.t('example')}: {props.t('10025323')}</p>
                        </div>
                    </div>
                </form>
           
        </>
    );
}

export default SorgulamaSearch;