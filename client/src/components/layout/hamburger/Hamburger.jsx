import { useState } from "react";
import styles from '../hamburger/Hamburger.module.scss'
import {FaAlignRight} from 'react-icons/fa'
import {IoCloseSharp} from 'react-icons/io5'
import Menu from "./Menu";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

const Hamburger = () => {

    const {isShow, ref, setIsShow} = useOnClickOutside(false);
   

    return <div className={styles.wrapper} ref={ref}>
        <button onClick={() => setIsShow(!isShow)}>
            {isShow ? <IoCloseSharp /> : <FaAlignRight />}
            {/* <FaAlignRight color='white'/> */}
        </button>

        <Menu isShow={isShow} setIsShow={setIsShow} />
    </div>
}

export default Hamburger;