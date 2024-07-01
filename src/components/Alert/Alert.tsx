// import "./index.css"
import { ReactNode } from "react";
import "./index.scss"
import { X } from 'lucide-react';
import { AlertType } from "../../types";


interface IProps {
    type: AlertType ;
    icon: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
}
// eslint-disable-next-line no-empty-pattern
const Alert = ({type = "alert-error",icon, title, description,children}: IProps) => {
return(
    <>
        <div className={type}>
            <div className="alert-header">
                <div className="title" >
                <span>{icon} </span>
                <h4>{title}</h4>
                </div>
                <X className="close" size={20} /> 
            </div>
            {children ? children : <p>{description}</p> } 
        </div>
    </>
)
}
export default Alert;