
import InnerHTML from 'dangerously-set-html-content'

const Aside = (props: any) => {
    return (
        <>
            <InnerHTML html={props.content} />
        </>
    );
}
export default Aside;