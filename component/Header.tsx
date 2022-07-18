import InnerHTML from 'dangerously-set-html-content'

const Header = (props: any) => {
    return (
        <div className="headerClass">
            <InnerHTML html={props.content} />
        </div>
    );
}
export default Header;