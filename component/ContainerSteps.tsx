
import React from 'react';
import styles from '../styles/container-tracking/ContainerSteps.module.scss';
import * as Icon from 'react-bootstrap-icons';

export default (props: any) => {



    return (
        <>
            <div className={styles.containerSteps}>
                {props.data.map((step: any, index: number) => {
                    return (
                        <div className={`text-center ${styles.step} ${step.eventStatus === 'X' ? styles.active : ''}`} key={index}>
                            <div>
                                <Icon.CheckCircle></Icon.CheckCircle>
                                <div className='small'>{step.eventDescription}</div>
                            </div>
                            <div>
                                <div className='small'>{step.eventDate}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>

    );
};
