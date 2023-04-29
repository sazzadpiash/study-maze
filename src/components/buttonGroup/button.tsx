import React from 'react';
import Styles from '../../styles/Button.module.css';
export const Button = ({ children, prop }: any) => {
    return (
        <button type='submit' className={Styles.btnGroup} > {children}</ button>
    );
};
