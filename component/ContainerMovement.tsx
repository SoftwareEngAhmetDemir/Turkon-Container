import styles from '../styles/container-tracking/ContainerMovement.module.scss';
import { Collapse } from 'react-collapse';
import { useState } from 'react';

const ContainerMovement = (props: any) => {

    const [isOp, setIsOp]: any = useState([]);

    const collapseUtil = (index: any) => {
        isOp[index] = !isOp[index];
        setIsOp([...isOp]);
    }
    const getDataOfRow: any = (data: any) => {
        return {
            "Container Number": data.containerNo,
            "Container Size/Type": data.type,
            "Cargo Weight": data.weight,
            "VGM": data.vgm,
            "IMDG-UN-PACKING GROUP": data.packingGroup,
            "Reefer": data.reefer,
            "OOG": data.oog
        };
    }
        return (

            <div className='border-2 border-bottom py-3'>
                <h1>{props.t('Container Events')}</h1>
                <div className="title-bottom-border"></div>
                {
                    props.data.map((row: any, i: number) => {
                        return (
                            <div className={`${styles.ContainerMovement} mt-3`} key={'i-' + i}>
                                <div className={`${styles.bord} row align-items-center gx-3`}>{
                                    Object.keys(getDataOfRow(row.containerProperties)).map((itemKey: any, k: number) => {
                                        const item: any = getDataOfRow(row.containerProperties)[itemKey];
                                        return (
                                            <div className={itemKey!=='OOG'?`col-lg col-6 ${styles.column}`:`col-lg-3 col-6 ps-4 ${styles.column}`} key={'k-' + k}>
                                                <div className={styles.title}>
                                                    {props.t(itemKey)}
                                                    {itemKey === 'Container Size/Type' ? <img src='/images/kontainer.svg' /> : null}
                                                </div>
                                                <div className={`${styles.desc}`}>{item}</div>
                                            </div>
                                        );
                                    })
                                }
                                    <button className={`col-lg col-6 bg-transparent border-0`} >
                                        <div className={`${styles.kamyonc} ${isOp[i] === false||isOp[i]=== undefined ?'':styles.openKamyon} text-white kamyonc`}>
                                            <div className='row justify-content-center align-items-center'>
                                                <div className={`col-12 ${styles.icon}`}>
                                                    <i className={`icon-${row.containerProperties.lastEventCode}`}></i>
                                                </div>
                                                <div className={`col-12 ${styles.icondesc} text-center text-white`}>
                                                    {row.containerProperties.lastEventName}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                {
                                    row.containerProperties.movements.map((movement: any, j: number) => {
                                        return (
                                            <Collapse isOpened={isOp[i]} className='bord-s' key={j}>{
                                                <div className={`${styles.bordLines} row gx-3 align-items-center`}  key={j}>
                                                    <div className={`col-lg col-6`}>
                                                        <div className={styles.title}>
                                                            {props.t("Vessel Name")}
                                                        </div>
                                                        <div className={styles.description}>
                                                            {movement.shipName}
                                                        </div>
                                                    </div>
                                                    <div className={`col-lg col-6`}>
                                                        <div className={styles.title}>
                                                            {props.t("Event")}
                                                        </div>
                                                        <div className={styles.description}>
                                                            {movement.eventName}
                                                        </div>
                                                    </div>
                                                    <div className={`col-lg col-6`}>
                                                        <div className={styles.title}>
                                                            {props.t("Event Date")}
                                                        </div>
                                                        <div className={styles.description}>
                                                            {movement.eventDate}
                                                        </div>
                                                    </div>
                                                    <div className={`col-lg col-6`}>
                                                        <div className={styles.title}>
                                                            {/* Event Date */}
                                                        </div>
                                                        <div className={styles.description}>
                                                            {/* {movement.eventDate} */}
                                                        </div>
                                                    </div>
                                                    <div className={`col-lg col-6`}>
                                                        <div className={styles.title}>
                                                        </div>
                                                        <div className={styles.description}>
                                                        </div>
                                                    </div>
                                                    <div className={`col-lg col-6`}>
                                                        <div className={styles.title}>
                                                        </div>
                                                        <div className={styles.description}>
                                                        </div>
                                                    </div>
                                                    <div className={`col-lg-4 col-6 d-lg-block d-none`}>
                                                        <div className={styles.title}>
                                                            {props.t("Location")}
                                                        </div>
                                                        <div className={styles.descriptionc}>
                                                            {movement.eventLocation}
                                                        </div>
                                                    </div>
                                                    <div className={`d-lg-inline d-none w-50`}>
                                                        <div className={styles.title}>
                                                        </div>
                                                        <div className={styles.description}>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            </Collapse>
                                        );
                                    })
                                }
                                <div className={`${styles.BordDetail}`}>
                                    <div className={`${styles.Detaylar}`}>
                                        <div className={styles.text} onClick={() => collapseUtil(i)}>
                                            <span className='drop-list-title'>{isOp[i] === undefined || isOp[i]==false ? "Detaylar" : "DetaylarI Gizle"}</span>
                                            <span className={`${isOp[i] === false||isOp[i]=== undefined ? 'icon-arrow-down' : 'icon-arrow-up'}`}></span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        );
}

export default ContainerMovement;