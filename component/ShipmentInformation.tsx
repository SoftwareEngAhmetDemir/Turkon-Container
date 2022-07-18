import styles from '../styles/container-tracking/ShipmentInformation.module.scss';

const ShipmentInformation = (props: any) => {

    const { data } = props;

    return (
        <div >
            <h1>{props.t('Shipment Information')}</h1>
            <div className="title-bottom-border"></div>
            <div className={styles.ShipmentInformation}>
                <div className={styles.List}>
                    <div className={styles.item}>
                        <div className='row p-1'>
                            <div className="col-lg-3 col-6">
                                <div className={`col-12 ${styles.title}`}>{props.t('Port Of Loading')}</div>
                                <div className={`ol-12 ${styles.detail}`}>{data.pol}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={`col-12 ${styles.title}`}>
                                    {/* {data.polDepartureDate || data.polDepartureDate?.length > 0 ?
                                        props.t('Departure Date') : data.polEstDate || data.polEstDate?.length > 0 ?
                                            `ESTIMATED ${props.t('Departure Date')}` : props.t('Departure Date')} */}
                                            {props.t('Departure Date') }
                                </div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.polDepartureDate || data.polDepartureDate?.length > 0 ?
                                        data.polDepartureDate : data.polEstDate || data.polEstDate?.length > 0 ?
                                            data.polEstDate : data.polDepartureDate}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-lg-0 mt-3 pb-lg-0 pb-3">
                                <div className={`col-12 ${styles.title}`}>{props.t('Vessel Name')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.polShip}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-lg-0 mt-3 pb-lg-0 pb-3">
                                <div className={`col-12 ${styles.title}`}>{props.t('Voyage Number')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.polVoyage}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={data.pts ? `${styles.item}` : 'd-none'}>
                        <div className='row p-1'>
                            <div className="col-lg-3 col-6">
                                <div className={`col-12 ${styles.title}`}>{props.t('TRANSSHIPMENT PORT')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.pts}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={`col-12 ${styles.title}`}>
                                    {data.ptsArrivalDate || data.ptsArrivalDate?.length > 0 ?
                                        props.t('Departure Date') : data.ptsEstDate || data.ptsEstDate?.length > 0 ?
                                            'ESTIMATED ' + props.t('Departure Date') : props.t('Departure Date')}
                                </div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.ptsArrivalDate || data.ptsArrivalDate?.length > 0 ?
                                        data.ptsArrivalDate : data.ptsEstDate || data.ptsEstDate?.length > 0 ?
                                            data.ptsEstDate : data.ptsArrivalDate}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-lg-0 mt-3 pb-lg-0 pb-3">
                                <div className={`col-12 ${styles.title}`}>{props.t('Vessel Name')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.ptsShip}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-lg-0 mt-3 pb-lg-0 pb-3">
                                <div className={`col-12 ${styles.title}`}>{props.t('Voyage Number')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.ptsVoyage}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className='row p-1'>
                            <div className="col-lg-3 col-6">
                                <div className={`col-12 ${styles.title}`}>{props.t('Port Of Discharge')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.pod}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className={`col-12 ${styles.title}`}>
                                   {/* xxx {data.podArrivalDate || data.podArrivalDate?.length > 0 ?
                                        props.t('Time of Arrival') : data.podEstDate || data.podEstDate?.length > 0 ?
                                            'ESTIMATED ' + props.t('Time of Arrival') : props.t('Time of Arrival')} */}
                                            {data.podTitle}
                                </div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.podArrivalDate || data.podArrivalDate?.length > 0 ?
                                        data.podArrivalDate : data.podEstDate || data.podEstDate?.length > 0 ?
                                            data.podEstDate : data.podArrivalDate}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-lg-0 mt-3 pb-lg-0 pb-3">
                                <div className={`col-12 ${styles.title}`}>{props.t('Vessel Name')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.podShip}
                                </div>
                            </div>
                            <div className="col-lg-3 col-6 mt-lg-0 mt-3 pb-lg-0 pb-3">
                                <div className={`col-12 ${styles.title}`}>{props.t('Voyage Number')}</div>
                                <div className={`col-12 ${styles.detail}`}>
                                    {data.podVoyage}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={`mt-4 ${styles.map}`}>
                    <img src="https://dummyimage.com/750x400/c4c4c4/fff" alt="" width="100%" />
                    <div className={styles.mapText}>
                    </div>
                    <div className={styles.HaritaText}>
                        <div>Harita Gizli
                            <i className='svgtofont-ok'></i>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default ShipmentInformation;

// pod: "ILASHOLP"
// podArrivalDate: "12.01.2022"
// pol: "TRAMRKMX"
// polDepartureDate: "02.01.2022"
// pts: ""
// ptsArrivalDate: "00.00.0000"
// shipName: ""
// voyage: ""