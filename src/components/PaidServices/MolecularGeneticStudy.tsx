import styles from "./MolecularGeneticStudy.module.css"
import { Container } from "react-bootstrap"


export const MolecularGeneticStudy = () => {
    return (
        <Container>
            <h1>Молекулярно-генетические исследования</h1>
            <div className={styles.wrapper}>
                <div>Консультация цитологических препаратов ТАБ узлов щитовидной железы</div>
                <div>1900₽</div>
            </div>
            <div className={styles.wrapper}>
                <div>Комплексное молекулярно-генетическое исследование в материале ТАБ узлов щитовидной железы</div>
                <div>10000₽</div>
            </div>
        </Container >
    )
} 