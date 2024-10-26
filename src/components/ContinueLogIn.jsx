import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ContinueLogIn({text}) {
    return (
        <div className="bg-white w-[80%] flex justify-center py-2 px-8 mt-4">
            <span>{text}</span>
            {/* <FontAwesomeIcon icon={f} /> */}
        </div>
    );
}