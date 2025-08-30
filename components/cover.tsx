import {Page, Text, View} from "@react-pdf/renderer";
import {Paragraph, Title} from "./paragraph.tsx";

const Cover = () => {
    return (
        <Page size="A4" style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: "1.5cm",
            paddingHorizontal: "2cm",
            textAlign: "justify",
            fontSize: "14pt",
            gap: "0.7cm",
            border: "12pt",
            borderColor: "#003049",
            backgroundColor: "#f9f7f3"
        }}>
            <Title bold="true" size={45} style={{lineHeight: 1.2, color: "#003049"}}>
                Demostración de que Jesucristo es el Mesías esperado por los hebreos
            </Title>
            <View style={{
                paddingTop: "2.5cm",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.3cm",
            }}>
                <Paragraph>
                    Rafael Luis Serralta Nogués (1928 - 2023)
                </Paragraph>
                <Paragraph>
                    Télefono: (305) 951-7435
                </Paragraph>
                <Paragraph>
                    Email: rlserralta@netzero.net
                </Paragraph>
                <Paragraph>
                    Miami, FL 33265-5126
                </Paragraph>
            </View>

            <View style={{
                alignItems: "center",
                justifyContent: "center",
                gap: "0.3cm",
                position: "absolute",
                bottom: "2cm"
            }}>
                <Paragraph>
                    Edición: Joan Andrés Buriticá Salazar
                </Paragraph>
                <Paragraph>
                    Email: andres6936@live.com
                </Paragraph>
            </View>
        </Page>
    )
}

export {
    Cover
}