import { Fragment, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void;
  color?: "primary" | "secondary";
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <Fragment>
        <div>
          <button type="button" className={"btn btn-" + color} onClick={onClick}>
            {children}
          </button>
        </div>
        
        
    
    </Fragment>
  );
};

export default Button;
