import {FC, ReactNode} from "react";
import styles from './main-content.module.scss';
import classNames from "classnames";

interface IMainContentProps {
    children: ReactNode
    someProp?: string,
    cols?: number
}

const MainContent: FC<IMainContentProps> = ({
    children,
    someProp = 'default',
    cols = 2
}) => {
    return (
        <div className={classNames(styles.container, styles[`grid_columns_${cols}`]) }>
            {children}
        </div>
    )
}

export default MainContent
