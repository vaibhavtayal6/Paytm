import {Link} from "react-router-dom"

export function BottomWarning({lable,buttonText , to}){
    return <div className="py-2 text-sm flex justify-center" >
        <div>
            {lable}
        </div>
        <div>
            <Link className="pointer underline pl-1 cursor-pointer" to={to}>
                {buttonText}
            </Link>
        </div>
    </div>

}