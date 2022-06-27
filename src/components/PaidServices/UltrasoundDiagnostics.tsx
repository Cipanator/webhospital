import styles from "./UltrasoundDiagnostics.module.css"
import { Container } from "react-bootstrap"


export const UltrasoundDiagnostics = () => {
    return (
        <Container>
            <h1>Ультразвуковая диагностика</h1>
            <div className={styles.wrapper}>
                <div>УЗИ вен нижних конечностей</div>
                <div>3000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>УЗИ вен верхних конечностей</div>
                <div>3000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Ультразвуковая диагностика почек и надпочечников</div>
                <div>2000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Ультразвуковое исследование желчного пузыря с определением его сократимости</div>
                <div>1500₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Ультразвуковое исследование комплексное женских половых органов (трансабдоминально и трансвагинально) в рамках консультации</div>
                <div>1800₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Ультразвуковое исследование щитовидной железы</div>
                <div>1500₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Ультразвуковое исследование предстательной железы трансректальное</div>
                <div>2000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Ультразвуковое исследование почек и надпочечников</div>
                <div>1500₽</div>
            </div>
        </Container >
    )
}