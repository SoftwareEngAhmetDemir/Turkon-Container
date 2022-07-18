import InnerHTML from 'dangerously-set-html-content'


const Footer = (props: any) => {
    return (
        <div className="footerclass">
            <InnerHTML html={props.content} />
        </div>
    );
}

export default Footer;