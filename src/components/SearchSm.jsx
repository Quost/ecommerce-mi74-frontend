import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchSm() {
    return <>
    <a href="" className="bg-[#F5F5F5] flex items-center justify-center p-2 rounded-lg text-[#4E598C]" >
        <FontAwesomeIcon icon={ faMagnifyingGlass } className=" w-6 h-6" />
    </a>
    </>
}