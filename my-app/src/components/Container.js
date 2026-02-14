import './Container.css'
function Container(props) {
    const classes ="container"
    return (
        <div className='container'>{props.children}</div>
    )
}
export default Container;