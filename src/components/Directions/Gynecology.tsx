import styles from "./Gynecology.module.css"
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Gynecology = () => {
    return (
        <Container>
            <h1>Гинекология.</h1>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <p className={styles.text}>Врачи гинекологического отделения Клиники высоких медицинских технологий им. М.Е.Иванова ежедневно проводят сложнейшие операции всеми видами и доступами оперативных вмешательств: традиционным (лапаротомия, мини-лапаротомия),малоинвазивным - лапароскопическим, вагинальным</p>
                    <p className={styles.text}>Все врачи отделения оперативной гинекологии ведут амбулаторный прием, на котором вы можете получить качественную диагностику и адекватное эффективное лечение (медикаментозное или хирургическое) как амбулаторно, так и в стационарных условиях.</p>
                    <p className={styles.text}><b>Наши приоритеты</b></p>
                    <ul>
                    <li>Высокий профессиональный уровень.</li>
                    <li>Максимальный результат в кратчайшие сроки наименее травматичным способом. </li>
                    <li>Стремление сохранить органы женской репродуктивной системы. </li>
                    <li>Индивидуальный комплексный подход к каждой пациентке. </li>
                    </ul>
                    <h2>Хирургическое лечение выполняется при следующих патологиях: </h2>
                    <ul>
                    <li>миома матки,</li>
                    <li>доброкачественные образования яичников,</li>
                    <li>распространенные формы эндометриоза, </li>
                    <li>внутриматочная патология (полипы, гиперплазия эндометрия, внутриматочные синехии и др.),</li>
                    <li>патология шейки матки (эктопия, лейкоплакия, дисплазия, карцинома in situ),</li>
                    <li>пролапс тазовых органов, </li>
                    <li>недержание мочи у женщин.</li>
                    </ul>
                    <div className={styles.image}></div>
                    <h2>Основные направления работы гинекологического отделения:</h2>
                    <p className={styles.text}><b>1. Эндовидеохирургия (лапароскопическая гинекология). </b>Это современный малоинвазивный метод хирургического лечения, при котором вместо большого разреза кожи делаются проколы до 10-12 мм, в которые вводятся инструменты для работы хирурга и соединенная с видеокамерой оптика, позволяющая видеть все на экране.</p>
                    <div className={styles.image2}></div>
                    <p className={styles.text}><b>2. Влагалищная хирургия. </b>Хирургическое вмешательство осуществляется со стороны влагалища, на животе нет ни разрезов, ни проколов.</p>
                    <p className={styles.text}><b>Данным доступом выполняются оперативные вмешательства: </b></p>
                    <ul>
                    <li>при опущении и выпадении матки, стенок влагалища (с пластикой собственными тканями иили использованием сетчатых трансплантатов;</li>
                    <li>коррекция стрессового недержания мочи (с использованием сетчатых эндопротезов), как органосохраняющие, так и радикальные (с удалением матки по показаниям),</li>
                    <li>оперативное лечение мочеполовых свищей, а также удаление образований на наружных половых органах: кисты влагалища, кисты бартолиниевых желез и пластика половых губ и т.д.</li>
                    </ul>
                    <p className={styles.text}>Кроме того, в некоторых случаях у пациенток без опущения тазовых органов,с патологией матки, требующей ее удаления, также возможно использование влагалищного доступа.</p>
                    <p className={styles.text}><b>3. Оперативное лечение традиционным доступом (лапаротомия).</b>При невозможности использовать вышеперечисленные малоинвазивные методики, оперативное лечение выполняется традиционным доступом (лапаротомия), предпочтительным (при возможности) является мини-лапаротомия (когда выполняется небольшой горизонтальный разрез над лоном с наложением косметического шва).</p>
                    <p className={styles.text}><b>4. На гинекологическом отделении проводится хирургическая коррекция врожденных аномалий развития половых органов.</b>С целью определения необходимости операции, ее объема, доступа, требуется предварительная консультация гинеколога. </p>
                    <h2>Лечение пролапса тазовых органов и стрессового недержания мочи</h2>
                    <p className={styles.text}>При пролапсе тазовых органов мы предлагаем нашим пациенткам малотравматичные операции, включающие в себя использование синтетических эндопротезов в минимально достаточном количестве в сочетании с пластикой собственными тканями – гибридную реконструкцию тазового дна. Данная методика показала высокую эффективность (более 90,0%) при двухлетнем сроке наблюдения. Она сочетает в себе надежность коррекции синтетическим имплантатом и безопасность восстановления собственными тканями. Операция легко переносится пациентками, в большинстве случаев единственное, что беспокоит пациенток после вмешательства – это 2 шва в области ягодиц. Несомненным преимуществом операции является короткий период реабилитации – на выписка пациенток производится на 2-ые сутки после операции.</p>
                    <p className={styles.text}>Пациенткам более молодого возраста, имеющим пролапс органов малого таза, врачи нашего отделения также могут предложить лапароскопическую сакрокольпопексию с сохранением матки или выполнением надвлагалищной ампутации тела матки.</p>
                    <p className={styles.text}>При стрессовом недержании мочи выполняется имплантация регулируемой субуретральной петли (слинга).</p>
                    <p className={styles.text}>Отличием данной методики от рутинно выполняемых в большинстве стационаров нашей страны операций является использование эндопротеза - ленты с возможностью регулировки его натяжения на следующий день после вмешательства. Благодаря этому механизму удается достичь высокой эффективности операции (до 96,0%) при этом минимизируется риск избыточного натяжения слинга. Последнее нередко приводит к таким осложнениям, как острая или хроническая задержка мочи, снижение качественных характеристик мочеиспускания: ослабление струи, мочеиспускание в несколько этапов, необходимость принятия определенной позы при мочеиспускании, чувство неполного опорожнения мочевого пузыря. </p>
                    <h2>Консультации смежных специалистов</h2>
                    <p className={styles.text}>В штате отделения есть онкогинекологи Закревская Екатерина Валерьевна и Соболев Иван Викторович, несколько специалистов помимо акушерства и гинекологии также сертифицированы по онкологии. Ведется прием пациенток и оперативное лечение при злокачественных заболеваниях шейки, тела матки, яичников. Выполняются как диагностические вмешательства с целью верификации диагноза и стадирования процесса , так и лечебные различного объема:</p>
                    <ul>
                    <li><b>Злокачественные заболевания тела матки </b>– экстирпация матки с придатками с тазовой лифаденэктомией (лапароскопическим и лапаротомным доступами).</li>
                    <li><b>Злокачественные заболевания шейки матки </b>- операция Вертгейма, при необходимости с сохранением яичников и их транспозицией.</li>
                    <li><b>Злокачественные заболевания яичников </b>- первичные или интервальные комбинированные циторедуктивные операции.</li>
                    </ul>
                    <div className={styles.content2}>
                        <div className={styles.image3}></div>
                        <div>
                        Клиника на соответствие требованиям стандарта ГОСТ Р ИСО 9001-2015 применительно ко всем видам оказываемых клиникой услуг каждый год проходит процедуру подтверждения соответствия системы менеджмента качества. Наличие такого добровольного сертификата во многих странах является знаком качества оказываемых услуг для потребителя, дополнительной гарантией надежности и профессиональной компетентности не только на национальном, но и на международном уровне.
                        </div>
                    </div>
                </div>



            </div>
        </Container >
    )
}