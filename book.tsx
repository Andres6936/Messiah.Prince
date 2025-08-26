import ReactPDF, {Document, Page, Text} from '@react-pdf/renderer';
import {Paragraph, Title} from "./components/paragraph.tsx";
import { Chapter } from './components/section.tsx';



const MyDocument = () => (
    <Document>
        <Page size="A4" style={{paddingVertical: "1.5cm", paddingHorizontal: "2cm", textAlign: "justify", fontSize: "14pt", gap: "0.5cm"}}>
            <Chapter title="Demostración de que Jesucristo es el Mesías esperado por los hebreos" chapter={1}>
                <Paragraph bold>Por qué escribí este libro</Paragraph>
                <Paragraph>
                    Quien sea un creyente de buena fe, y considere
                    que su creencia es la correcta, o que simplemente es
                    la mejor, debe predicarla para beneficiar a otros.
                    Debe ser un propagador de su fe. No debe
                    “comérsela” él solo, sin importarle lo que le suceda
                    eternamente a otros. Callar nuestra creencia es
                    egoísmo cruel, pues al hacerlo condenamos por
                    toda la eternidad a los que no tienen nuestra
                    salvadora fe. El que no predica su fe es porque
                    desprecia a los demás seres humanos, porque no le
                    importa su eterno destino, o porque no está seguro
                    de que la suya sea la verdadera o la mejor. Tan
                    simple como eso. Por eso yo propago mi fe a todos,
                    incluyendo a los judíos.
                </Paragraph>
                <Paragraph>
                    El propósito de este libro es ayudar a todos los
                    hebreos de buena fe a comprobar que Jesucristo
                    es el Mesías. Lo hago, para que al comprobarlo,
                    puedan obtener la salvación de su alma, aceptándolo
                    como el Cordero de Dios que quita el pecado del
                    mundo.
                </Paragraph>
                <Paragraph>
                    Abraham, Isaac, Jacob, Moisés y los demás
                    antecesores sacrificaban un cordero para limpiar sus
                    pecados. Ellos lo hacían porque habían recibido el
                    conocimiento de que Dios enviaría a su Mesías, que
                    era el Verdadero Cordero de Dios que quita el
                    pecado del mundo. Hoy en día algunos ignorantes
                    califican de salvajismo el sacrificio de corderos que
                    para limpiar sus pecados hacían los judíos fieles en
                    épocas anteriores a la destrucción del Templo por
                    los romanos. Eso no era un salvajismo, era un
                    simbolismo de lo que ellos sabían que ocurriría
                    algún día. Ese Cordero de Dios era Jesucristo. Por
                    eso después de su sacrificio Dios permitió que
                    terminaran los sacrificios de corderos en el Templo.
                </Paragraph>
                <Paragraph>
                    El motivo de este libro es demostrar a los
                    judíos que creen en las Escrituras de Moisés y los
                    profetas, que Jesús es el Mesías, el Verdadero
                    Cordero de Dios. No me baso para afirmar esto, en
                    libros escritos por “sabios”, sino en las Escrituras
                    hebreas, es decir, en el Antiguo Testamento. No
                    estoy aquí trayendo la opinión de curas, rabinos o
                    pastores, a los que sus seguidores llaman “sabios”.
                    El único Sabio es Nuestro Creador, que nos dio las
                    Escrituras de los profetas, para que guiáramos por
                    ellas nuestro comportamiento.
                    Para alcanzáramos el conocimiento de quién que sería y cuándo
                    vendría el deseado Mesías. Si leemos las
                    Escrituras veremos que el Mesías iba a tener dos
                    venidas a la Tierra. Una como cordero, a dejarse
                    sacrificar por los pecados de los que aman a Dios.
                    Otra como Rey del Mundo, para gobernar con vara
                    de hierro. La Primera Venida ya fue llevada a cabo
                    con el nacimiento, vida sin pecados, crucifixión,
                    muerte y resurrección de Jesucristo. La Segunda
                    Venida está por venir, y no se halla muy lejos en el
                    tiempo.
                </Paragraph>
                <Paragraph>
                    Cuando una persona cree de buena fe tener una
                    verdad que pueda beneficiar a otros, su deber es
                    compartirla. Eso es lo que estoy haciendo.
                </Paragraph>
                <Paragraph>
                    Dios no nos da las Escrituras para que
                    tengamos que depender de otros para
                    entenderlas. El Creador da Su Palabra para que
                    cualquier ser humano pueda entenderla; lo mismo
                    un sabio que un pescador. No obstante, como
                    siempre ocurre, surgen unos aprovechados que
                    pretenden hacernos creer que si no es a través de su
                    personal “inteligencia genial”, o a través de su
                    “divina unción”, nosotros, simples mortales, no
                    podemos llegar a saber qué es lo que Dios quiere de
                    nosotros.
                </Paragraph>
                <Paragraph>
                    El día que nos enfrentemos al Juicio Final, no
                    nos van a preguntar qué era lo que nos enseñaban
                    nuestros pastores, rabinos o curas, sino, qué era lo
                    que decía la Sagrada Escritura. Es por eso que en
                    este libro no se va a mencionar la opinión de ningún
                    rabino, cura, pastor o sabio teólogo, sino lo que
                    dijeron los verdaderos profetas de Dios.
                </Paragraph>
                <Paragraph>
                    El clero de todas las religiones por lo general
                    “vive de su cuento” y nos cobra muy caro para
                    “enseñarnos” lo que ellos dicen ser el producto de
                    su “sabiduría” y de sus muchos estudios. Dios le da
                    oportunidad a todos los humanos a buscar la verdad,
                    no tenemos que depender de otros.
                </Paragraph>
                <Paragraph>
                    Yo les aconsejo a los que lean este libro, que
                    busquen un Antiguo Testamento, escrito en
                    hebreo, impreso en una imprenta ortodoxa, para
                    que comprueben la veracidad de los argumentos
                    aquí esgrimidos. No usen traducciones a idiomas
                    corrientes, porque cuando esos traductores llegan a
                    aquellos pasajes que demuestran que Jesucristo es el
                    Mesías, los intereses creados hacen que distorsionen
                    la traducción. Lo escrito en hebreo no está
                    distorsionado, sobre todo los ejemplares antiguos
                    que se hallanen bibliotecas.
                </Paragraph>
                <Paragraph>
                    Los ejemplares antiguos son confiables, por varias
                    razones. Primero, los judíos que son verdaderos
                    creyentes no han permitido que se distorsione la
                    Palabra de Dios. Segundo, los que hacen
                    traducciones del hebreo al inglés, al español o a
                    cualquier otro idioma, no tienen temor de que los
                    descubran, porque los que saben hebreo no leen
                    esas alteradas traducciones, y los que no saben
                    hebreo no pueden impugnar la traducción.
                </Paragraph>
                <Paragraph>
                    Donde yo trabajaba laboraba también un
                    hebreo sabra, es decir, nacido y criado en Israel,
                    razón por la cual él leía y entendía perfectamente el
                    hebreo. El hombre no era religioso, ni se interesaba
                    en estas cuestiones, por lo cual no tenía opinión
                    prejuiciada. Como que ambos hablábamos inglés, él
                    me traducía al inglés lo que yo le preguntaba.
                </Paragraph>
                <Paragraph>
                    Yo tengo un Antiguo Testamento escrito en
                    hebreo, que me fue regalado por un amigo judío ya
                    fallecido, el cuál me lo trajo de Israel. Cuando yo
                    quería comprobar si lo que decía un pasaje del
                    Antiguo Testamento traducido por Reina-Valera,
                    concordaba con lo escrito en hebreo, yo fotocopiaba
                    el lugar y se lo llevaba a mi compañero de trabajo y
                    le pedía que me lo tradujera al inglés.
                    Siempre que lo hice, lo dicho por ese judío sabra concordaba con
                    la traducción Reina-Valera al español, y disentía de
                    traducciones rabínicas hechas en Argentina. Por eso
                    es que les aconsejo usar Escrituras antiguas en
                    hebreo, si es que ustedes saben el hebreo, o usar el
                    método que yo usé: utilizar a un sabra que no sea
                    religioso, a fin de que traduzca sin prejuicios.
                </Paragraph>
                <Paragraph>
                    Cual es la razón de los números que hay a la
                    izquierda de cada renglón en este libro.
                </Paragraph>
                <Paragraph>
                    A mi modo de ver, todo escritor debe estar
                    accesible a la discusión sana y edificante; no
                    encerrarse en su “torre de marfil” sin permitirle a
                    nadie que discuta su teoría. Por eso yo doy acceso a
                </Paragraph>
                <Paragraph>
                    que me impugnen lo que digo, porque considero que
                    de la sana discusión sale la luz. De esa manera, me
                    beneficio yo, porque me sacan de mis errores, si es
                    que los tengo, y se benefician mis interlocutores,
                    porque salen de los errores suyos si es que los tienen.
                </Paragraph>
                <Paragraph>
                    De los autores que he conocido ninguno ha deseado
                    jamás discutir por escrito y públicamente sus
                    doctrinas, o sus interpretaciones de la Escritura.
                    Dicen las cosas para que uno se las crea
                    dogmáticamente, por aquello de “magister dixit”. Y
                    si uno intenta impugnar con razones y argumentos,
                    por escrito, lo que ellos enseñan, contestan que no
                    desean “perder el tiempo” porque están “muy
                    ocupados”. De esa manera evitan que les demuestren
                    que están errados
                </Paragraph>
                <Paragraph>
                    Resumen del capítulo 1. Quien sea un creyente
                    de buena fe, y considere que su religión es la
                    correcta, o que es la mejor, debe predicarla para
                    beneficiar a otros. El propósito de este libro es
                    ayudar a todos los hebreos de buena fe a comprobar
                    que Jesucristo es el Mesías, el Cordero de Dios. De
                    esa manera alcanzan la salvación de sus almas.
                </Paragraph>
                <Paragraph>
                    El día que nos enfrentemos al Juicio Final, no nos
                    van a preguntar qué era lo que nos enseñaban
                    nuestros pastores, rabinos o curas, sino, qué era lo
                    que decía la Sagrada Escritura.
                </Paragraph>
                <Paragraph>
                    Como que yo no sé el idioma hebreo, me valía de
                    un judío sabra que trabajaba conmigo, el cual por no
                    ser religioso me traducía sin prejuicios. Les
                    recomiendo que hagan algo parecido,
                </Paragraph>
            </Chapter>
        </Page>
    </Document>
);

ReactPDF.render(<MyDocument/>, `./book.pdf`);