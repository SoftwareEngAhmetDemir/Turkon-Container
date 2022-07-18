import styles from '../styles/BreadCrumb.module.css'
const BreadCrumb = (props:any) => {
    return (
        <div className={styles.BreadCrumb}>
           <div className={styles.breaditem}><a href='#'>{props.t("Homepage")}</a></div>
           <div className={styles.breaditem}><a href='#'>{props.t("My Turkon")}</a></div>
           <div className={styles.breaditem}><a href='#'>{props.t("container-tracking")}</a></div>
        </div>
    );
}
export default BreadCrumb;