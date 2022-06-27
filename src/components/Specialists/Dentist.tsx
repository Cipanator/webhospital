import styles from "./Dentist.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Dentist = () => {
    return (
        <Container>
            <h1>Стоматология</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.text}> В клинике высоких медицинских технология им. М.Е. Иванова пациентам предоставляются стоматологические услуги, соответствующие самым высоким международным стандартам качества.</p>
                    <p className={styles.text}> Диагностика и лечение проводятся по всем основным направлениям стоматологии: терапия, ортопедия, микропротезирование, челюстно-лицевая хирургия и имплантация, пародонтология, ортодонтия, детская стоматология, а также рентгенодиагностика с возможностью получать 3D-изображения.</p>
                    <p className={styles.text}> Все виды стоматологических работ выполняются с использованием инновационных материалов и современного оборудования, что обеспечивает высокий уровень качества лечения, позволяет достигать максимально точных и эффективных результатов.</p>
                    <p className={styles.text}>Наличие собственного зуботехнического производства подразумевает изготовление различных стоматологических конструкций в оптимальные сроки и с высоким качеством.</p>
                   
                    <p className={styles.text}>В случае необходимости сложные стоматологические операции проводятся в стационаре. Высокая техническая оснащённость операционной даёт возможность специалистам решать задачи любой степени сложности, в том числе проводить операции по костной пластике, пластике десны.</p>
                    
                </div>



            </div>
        </Container >
    )
}

