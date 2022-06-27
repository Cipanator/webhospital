import styles from "./Consultations.module.css"
import { Container } from "react-bootstrap"


export const Сonsultations = () => {
    return (
        <Container>
            <h1>Цены на консультацию специалистов</h1>
            <div className={styles.wrapper}>
                <div>Прием (осмотр, консультация), первичный, врач-акушер-гинеколог, Блаженко А.А.</div>
                <div>2200₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Прием (осмотр, консультация), первичный, врач-кардиолог, Котова А.С.</div>
                <div>2500₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Прием (осмотр, консультация), первичный, врач-кардиолог, Соловьева А.В.</div>
                <div>3200₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Прием (осмотр, консультация), детского врача анестезиолога-реаниматолога</div>
                <div>2000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Прием (осмотр, консультация), первичный, врач-акушер-гинеколог, доцент, К.М.Н., с проведением УЗИ</div>
                <div>4 700₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Прием (осмотр, консультация), первичный, врач-эндокринолог, Куликова Е.А.</div>
                <div>4 700₽</div>
            </div>
        </Container >
    )
}