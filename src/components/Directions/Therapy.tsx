import styles from "./Therapy.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Therapy = () => {
    return (
        <Container>
            <h1>Направления работы по профилю терапия</h1>
            <div className={styles.wrapper}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <p className={styles.text}><b>1. Решение проблем трудного диагноза</b>- обследуются и получают квалифицированную помощь больные с неуточненным в ходе предыдущих госпитализаций диагнозом, а также имеющие ряд сопутствующих заболеваний, влияющих на общую клиническую картину. Платный терапевт проводит уточнение и установление диагноза в трудных случаях, при неясных состояниях и синдромах, таких как:</p>
                    <ul>
                    <li>лихорадка неясного происхождения,</li>
                    <li>анемия (малокровие),</li>
                    <li>гипертония,</li>
                    <li>ускорение СОЭ,</li>
                    <li>обмороки и потеря сознания,</li>
                    <li>упорные боли различной локализации,</li>
                    <li>похудание, слабость и психосоматические расстройства, скрытые и соматизированные депрессии,</li>
                    <li>вегетативные расстройства.</li>
                    </ul>
                    <p className={styles.text}><b>2. Предоперационная подготовка пациентов к плановому хирургическому лечению</b>(кардиохирургическим, травматологическим, сосудистым, гинекологическим, офтальмологическим, абдоминальным и другим операциям). Значительное число пациентов, которым предстоят те или иные оперативные пособия имеют сопутствующие соматические заболевания. К наиболее распространенным из них относятся ишемическая болезнь сердца, гипертоническая болезнь, хроническая обструктивная болезнь легких. Предоперационная подготовка пациентов к плановому хирургическому лечению подразумевает необходимое дообследование, квалифицированные консультации врача-терапевта, правильный (в соответствии с самыми современными международными и отечественными клиническими данными) подбор базисной терапии, которые позволят минимизировать риск операции в зависимости от индивидуальных особенностей каждого пациента!</p>
                    <p className={styles.text}><b>3. Лечение пациентов с сочетанной патологией внутренних органов.</b>Подбор терапии больному, страдающему несколькими заболеваниями, всегда представлял значительные трудности. Лекарственные средства зачастую имеют прямо противоположные эффекты, и препарат для лечения, например, гипертонической болезни или ишемической болезни сердца, может быть противопоказан при бронхиальной астме.  Многие пациенты, особенно старшей возрастной группы, страдают целым «букетом» болезней, и огромное значение имеет учет всех возможных влияний применяемых медикаментов. </p>
                    <h2>Возможности лечения у врача-терапевта:</h2>
                    <ul>
                    <li>подбор лекарственных препаратов с учетом индивидуальных особенностей (возраст, пол, особенности метаболизма, генетическая предрасположенность)</li>
                    <li>учет механизмов взаимодействия различных препаратов для минимизации побочных эффектов, применения минимальной дозы и усиления взаимного положительного влияния</li>
                    <li>лечение с учетом прогноза течения заболеваний, формирование его профилактической направленности (в том числе для исключения отдаленных побочных эффектов)</li>
                    <li>выбор оптимальной предоперационной терапии для больных, которым предстоит оперативное лечение (с учетом объема и характера оперативного пособия, планируемого метода анестезии)</li>
                    <li>применение в комплексной терапии естественных и физических факторов (физиотерапия) для оптимизации лекарственной терапии, в том числе снижения дозировки фармакологических препаратов. </li>
                    </ul>
                    <h2>Специалисты отделения подбирают терапию при заболеваниях систем:</h2>
                    <ul>
                    <li>сердечно-сосудистой (кардиология),</li>
                    <li>пищеварительной (гастроэнтерология),</li>
                    <li>опорно-двигательной (ревматология),</li>
                    <li>иммунной (аллергология),</li>
                    <li>эндокринной (эндокринология),</li>
                    <li>мочевыделительной (нефрология),</li>
                    <li>кроветворной системы (гематология),,</li>
                    <li>при любой сочетанной патологии внутренних органов.</li>
                    </ul>
                    <p className={styles.text}>Диагностическая база Клиники позволяет проводить углубленное обследование с использованием цифровой лучевой и эндоскопической техники, ультразвуковых исследований и лабораторных методик, пункционной биопсии органов с гистологической верификацией диагноза. Проводится определение дыхательной функции, ЭКГ, ЭХО, УЗИ, эндоскопия, компьютерная томография, цифровая рентгенография и другие.</p>
                    <p className={styles.text}>Клиника оборудована комфортабельными 1-, 2-х, и 3-х местными палатами (с душем и туалетом, телевизором, холодильником, электрочайником, в 1-местных палатах имеются печи СВЧ).</p>
                    <p className={styles.text}>В палатах выполнен качественный  ремонт. Пациенты обеспечиваются всеми необходимыми бытовыми предметами. Лечебное питание соответствует лечебным диетическим столам, приготовлено и подано таким образом, что нет необходимости затруднять своих родственников организацией дополнительного питания. Палаты оснащены системой экстренного оповещения и пожарной сигнализацией. Наблюдение за пациентами осуществляется круглосуточно. </p>
                    <p className={styles.text}>Клиника на соответствие требованиям стандарта ГОСТ Р ИСО 9001-2015 применительно ко всем видам оказываемых клиникой услуг каждый год проходит процедуру подтверждения соответствия системы менеджмента качества. Наличие такого добровольного сертификата во многих странах является знаком качества оказываемых услуг для потребителя, дополнительной гарантией надежности и профессиональной компетентности не только на национальном, но и на международном уровне.</p>
                </div>



            </div>
        </Container >
    )
}
