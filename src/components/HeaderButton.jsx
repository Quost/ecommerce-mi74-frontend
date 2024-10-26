export default function HeaderButton( { link , displayText } ) {
    return <>
        <a className="text-xl" 
        href={link}>
        
        {displayText} </a>
    </>
}