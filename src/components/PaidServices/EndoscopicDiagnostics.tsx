import styles from "./EndoscopicDiagnostics.module.css"
import { Container } from "react-bootstrap"


export const EndoscopicDiagnostics = () => {
    return (
        <Container>
            <h1>Эндоскопическая диагностика</h1>
            <div className={styles.wrapper}>
                <div>Эндоскопическая ультрасонография лимфатических узлов средостения</div>
                <div>7 000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Эзофагонастродуоденоскопия с экспресс тестом на лактазную недостаточность</div>
                <div>5 000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Эзофагогастродуоденоскопия с хелпил тестом Helicobacter pilory</div>
                <div>4 100₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Эзофагогастродуоденоскопия</div>
                <div>3 900₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Ректороманоскопия</div>
                <div>3 200₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Видеоларингоскопия</div>
                <div>2 000₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Видеоколоноскопия</div>
                <div>6 840₽</div>
            </div>
        </Container >
    )
}