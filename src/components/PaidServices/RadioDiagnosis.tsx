import styles from "./RadioDiagnosis.module.css"
import { Container } from "react-bootstrap"


export const RadioDiagnosis = () => {
    return (
        <Container>
            <h1>Лучевая диагностика</h1>
            <div className={styles.wrapper}>
                <div>Магнитно-резонансная томография органов брюшной полости с внутривенным контрастированием (в стоимость услуги цена контрастного вещества не включена)</div>
                <div>6500₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Магнитно-резонансная томография органов брюшной полости</div>
                <div>5500₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Магнитно-резонансная томография тазобедренных суставов (два сустава)</div>
                <div>5000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Магнитно-резонансная томография плечевого сустава (один сустав)</div>
                <div>5000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Магнитно-резонансная томография локтевого сустава (один сустав)</div>
                <div>5000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Магнитно-резонансная томография коленного сустава (один сустав)</div>
                <div>5000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Магнитно-резонансная томография (3 Тесла) головного мозга и черепно-мозговых нервов (1 пара нервов) с внутривенным контрастированием (* в стоимость услуги цена контрастного вещества не включена)</div>
                <div>7400₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Компьютерная томография почек и мочевыводящих путей с внутривенным болюсным контрастированием (в стоимость услуги цена контрастного вещества не включена)</div>
                <div>7000₽</div>
            </div>
        </Container >
    )
}