import styles from './BeforeHeader.module.css';
import Container from 'react-bootstrap/Container'
import { FaPhoneAlt } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { FormEvent, useState } from 'react';
import { Modal } from '../../Modal/Modal';
import { pagesData } from "./PagesData"

type Form = {
    fio: string;
    dateBirth: string;
    phone: string;
    address: string;
    email: string;
    doctor: string;
    date: string;
    consent: boolean;
}

export const BeforeHeader = () => {

    const [modalActive, setModalActive] = useState(false)
    const [search, setSearch] = useState("");
    const [formValid, setFormValid] = useState<boolean | null>(null);
    const [formInputs, setFormInputs] = useState<Form>(
        {
            fio: "",
            dateBirth: "",
            phone: "",
            address: "",
            email: "",
            doctor: "",
            date: "",
            consent: false
        }
    )


    const sharedStart = (array: string[]) => {
        let A = array.concat().sort(),
            a1 = A[0], a2 = A[A.length - 1], L = a1.length, i = 0;
        while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
        return a1.substring(0, i).length;
    }

    const searchFunc = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: any = []
        pagesData.forEach(elem => {
            data.push({ length: sharedStart([search.toLowerCase(), elem.name.toLowerCase()]), name: elem.name, link: elem.link })
        })
        let maxLength = 0;
        let maxLink = "";
        data.forEach((elem: any) => {
            if (elem.length > maxLength) {
                maxLength = elem.length;
                maxLink = elem.link;
            }
        })
        window.location.href = maxLink;
    }

    const onChangeFormHundler = (e: any) => {
        if (e.target.name === "consent") {
            setFormInputs({ ...formInputs, consent: !formInputs.consent })
        } else {
            setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
        }
    }

    const sendForm = () => {
        for (const key in formInputs) {
            if (key.length) {
                if (key === "phone" && !(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(formInputs.phone))) {
                    setFormValid(false)
                    return
                }
                if (key === "email" && !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formInputs.email))) {
                    setFormValid(false)
                    return
                }
                if (key === "consent" && !formInputs.consent) {
                    setFormValid(false)
                    return
                }
            } else {
                setFormValid(false)
                return
            }
        }
        setFormValid(true)
        fetch(`http://localhost:4000/sendmail?fio=${formInputs.fio}&dateBirth=${formInputs.dateBirth}&phone=${formInputs.phone}&address=${formInputs.address}&mail=${formInputs.email}&doctor=${formInputs.doctor}&date=${formInputs.date}`) // query ??????????????
            .then(response => console.log(response))
            .catch(err => console.log("???????????? ????????????????."))
        setModalActive(false)
    }

    return (
        <Container>
            <div className={styles.wrapper}>
                <Link to="/"><div className={styles.logo}><img src='./image/logo.png'></img></div></Link>
                <div>
                    <form onSubmit={searchFunc} >
                        <input className={styles.search} type="search" name="q" placeholder="?????????? ???? ??????????" value={search} onChange={e => setSearch(e.target.value)}
                        />
                        <input type="submit" hidden />
                    </form>
                </div>
                <div className={styles.number}><span className={styles.icon}><FaPhoneAlt /></span><a className={styles.phone} href='tel:+79218491015'>+7(921)849-10-15</a></div>
                <div className={styles.getServiceBtn}><a className={styles.btn} onClick={() => setModalActive(true)}>???????????? ???? ??????????</a></div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <form className={styles.form}>
                        <h2>?????????????????????????????? ???????????? ???? ??????????</h2>
                        <p>?? ???????????? ?????????????????????? ?????????????? ???????? ???????????????????? ????????????. ???????? ?? ?????????? ???????????? ?????????? ???????????????? ???????????????????? ?? ?????????????? 1 ???????????????? ??????.</p>

                        <div className={styles.inputGroup}>
                            <label>?????? ??????????????????<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="fio" value={formInputs.fio} onChange={onChangeFormHundler} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>???????? ????????????????<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="dateBirth" value={formInputs.dateBirth} onChange={onChangeFormHundler} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>???????????????????? ??????????????<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="phone" value={formInputs.phone} onChange={onChangeFormHundler} />

                        </div>
                        <div className={styles.inputGroup}>
                            <label>?????????? ???????????????????? (??????????)<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="address" value={formInputs.address} onChange={onChangeFormHundler} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>?????????? ?????????????????????? ??????????<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="email" value={formInputs.email} onChange={onChangeFormHundler} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>????????<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="doctor" value={formInputs.doctor} onChange={onChangeFormHundler} />
                        </div>
                        <div className={styles.inputGroup}>
                            <label>?????????????? ????????<span className={styles.red}>*</span></label>
                            <input className={styles.input} type="text" name="date" value={formInputs.date} onChange={onChangeFormHundler} />
                        </div>

                        <div className={styles.inputGroupCheckbox}>
                            <input className={styles.input2} type="checkbox" name="consent" checked={formInputs.consent} onChange={onChangeFormHundler} />
                            <label>?? ???????????????? ???? ?????????????????? ???????????????????????? ????????????</label>
                        </div>

                        {formValid === false ? <p className={styles.error}>????????????, ???? ?????? ???????? ?????????????????? ??????????!</p> : ""}

                        <div className={styles.inputGroupBtn}>
                            <input className={styles.btn} type="button" name="name" value="??????????????????" onClick={sendForm} />
                        </div>
                    </form>
                </Modal>
            </div>
        </Container>
    )
}