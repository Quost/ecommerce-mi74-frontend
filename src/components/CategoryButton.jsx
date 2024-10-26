export default function Header( { link , text } ) {

    return <>
        <a className="md:px-12 py-4 rounded-2xl md:text-xl text-[#F5F5F5] bg-[#4E598C] hover:brightness-75 px-4 text-base" href={ link }> { text } </a>
    </>
}