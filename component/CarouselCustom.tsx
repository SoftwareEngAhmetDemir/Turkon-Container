
import React from 'react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../styles/container-tracking/CarouselCustom.module.scss';
function CarouselCustom(props: any) {
  const nextButton = () => {
    let btn = document.getElementsByClassName('swiper-button-next')[0] as HTMLButtonElement;
    btn.click();
  }
  const previousButton = () => {
    let btn = document.getElementsByClassName('swiper-button-prev')[0] as HTMLButtonElement;
    btn.click();
  }

  return (
    <>
      <div className={styles.swiperCustomContainer}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          spaceBetween={20}
          slidesPerView={6}
          navigation={true}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => 'slide change'}
          breakpoints={{
            0: {
              // width: 0,
              slidesPerView: 3,
            },
            768: {
              // width: 768,
              slidesPerView: 5,
            },
            1200: {
              // width: 1200,
              slidesPerView: 6,
            },
          }}
        >
          {props.data.map((step: any, index: number) =>
            <SwiperSlide className={`${styles['swiper-slide']} ${step.isStatusDark === true ? styles.activeCard : ''}`} key={index}>
              <div className={styles['carousel-card']}>
                <div className={styles.top}>
                  <div className='d-flex justify-content-center align-items-start'>
                    <i className={`icon-${step.eventCode}`}></i>
                  </div>
                  <div className={styles.title}>{step.eventDescription}</div>
                </div>
                <div className={styles.bottom}>
                  <div className={step.eventTitle ? styles.vasif : 'd-none'}>
                    {step.eventTitle}
                  </div>
                  {step.isStatusDark === false ?
                    <div>
                      {step.eventDate ? <div className={styles.detail}>{step.eventDate}</div> : ''}
                      {step.eventDateEnd ? <div className={styles.detail}>{step.eventDateEnd}</div> : ''}
                    </div> :
                    <div>
                      {step.eventDate ? <div className={`d-flex align-items-center ${styles.detail}`}> <i className={`icon-startdate ${styles.dates} me-1`}></i>  <span>{step.eventDate}</span></div> : ''}
                      {step.eventDateEnd ? <div className={`d-flex align-items-center ${styles.detail}`}> <i className={`icon-enddate ${styles.dates} me-1`}></i>  <span>{step.eventDateEnd}</span></div> : ''}
                    </div>}
                  {step.isStatusDark === true && step?.contComplete ?
                    <div className="d-flex w-100 align-items-center mb-3">
                      <div className={styles.progressbarcontainer}>
                        <progress max={step.contComplete ? step.contComplete.split("/")[1] : 100} value={step.contComplete ? step.contComplete.split("/")[0] : 0}></progress>
                      </div>
                      <div className={styles.bardetails}>{step.contComplete}</div>
                    </div> : <div className={styles.makevertical}></div>}
                </div>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <button className={styles.rightbutton} onClick={() => nextButton()}></button>
        <button className={styles.leftbutton} onClick={() => previousButton()}></button>
      </div>
    </>

  );
}
export default CarouselCustom;
