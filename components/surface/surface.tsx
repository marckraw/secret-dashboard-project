import {FC, HTMLAttributes, ReactNode} from "react";
import classNames from "classnames";
import s from './surface.module.scss';

interface ISurfaceProps extends HTMLAttributes<HTMLDivElement>{
    children: ReactNode
}

const Surface: FC<ISurfaceProps> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <div className={classNames(className, s.container)} {...rest}>
            <div>
                {children}
            </div>
            <button type="button" onClick={() => {
                throw new Error("Sentry Frontend Error");
            }}>
                Throw error
            </button>
        </div>
    )
}

export default Surface
