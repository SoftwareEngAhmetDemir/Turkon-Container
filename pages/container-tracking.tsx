import type { GetStaticPropsContext, NextPage } from 'next'
import { useEffect, useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import ContainerMovement from '../component/ContainerMovement'
import ShipmentInformation from '../component/ShipmentInformation'
import SorgulamaSearch from '../component/SorgulamaSearch'
import ContainerSteps from '../component/ContainerSteps'
import styles from '../styles/container-tracking/ContainerTracking.module.scss'
import { ErrorMessages, online } from '../httpClient';
import api from '../api'
import Loader from '../component/Loader'
import CarouselCustom from '../component/CarouselCustom'
import { useTranslations } from 'next-intl';

const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
    return {
        props: {
            // You can get the messages from anywhere you like. The recommended
            // pattern is to put them in JSON files separated by language and read
            // the desired one based on the `locale` received from Next.js.
            messages: (await import(`../messages/container-tracking/${locale}.json`)).default
        }
    };
};
export { getStaticProps };

const ContainerTracking: NextPage = () => {


    const [trackingInfo, setTrackingInfo] = useState<any>(null);
    const [errorMessages, setErrorMessages] = useState<any>([]);
    const [showLoader, setShowLoader] = useState<any>(false);
    const t = useTranslations();

    useEffect(() => {

        return () => {
        }
    }, [])

    // Örnek:
    // TRKU2050192
    // ODSNYC003202
    // 10002826
    // 10002929
    // TRKU1234567 boş
    // 10003612- 8 Hane ise ve başı 1 ile başlıyorsa
    // 3200003906 – 10 hane ise ve başı 32 ile başlıyorsa
    const onSubmit = (params: any) => {
        let bookingNumber = params;
        let containerNumber = "";

        if (params.match(/^[A-Z]/g)) {
            containerNumber = params;
            bookingNumber = "";
        }

        setErrorMessages(null);
        setTrackingInfo(null);
        setShowLoader(true);

        online.post(api.containerTracking.byBookingOrContainerNumber, {
            bookingNumber,
            containerNumber
        })
            .then((response: any) => {
                setTrackingInfo(response);
            })
            .catch((error: ErrorMessages) => {
                setErrorMessages(error.messages);
            })
            .finally(() => {
                setShowLoader(false);
            });
    }

    return (
        <div className={styles.ContainerTracking}>
            <BreadCrumb t={t}/>
            <SorgulamaSearch t={t} onSubmit={onSubmit} />
            {showLoader && <Loader />}
            {errorMessages && <>
                {errorMessages?.map((error: any, index: number) => {
                    return (
                        <div className="row mt-5 text-danger" key={index}>
                            <div className="col">
                                {error.message}
                            </div>
                        </div>
                    );
                })}
            </>}
            {trackingInfo && <>
                <CarouselCustom data={trackingInfo.containerSteps} />
                {/* <ContainerSteps data={trackingInfo.containerSteps} /> */}
                <ShipmentInformation t={t} data={trackingInfo.shipmentInformation} />
                <ContainerMovement t={t} data={trackingInfo.containerMovements} />
            </>}

        </div>
    )
}

export default ContainerTracking;

