import { Page, View } from "@react-pdf/renderer";

import {Paragraph, Title} from "~/components/paragraph.tsx";
import {defaultStyles} from "~/utils/defaultStyles.ts";

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
            borderColor: defaultStyles.primary,
            backgroundColor: defaultStyles.background,
        }}>
            <View style={{
                position: "absolute",
                top: "1.5cm",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <Paragraph style={{fontSize: 9, opacity: 0.8}}>
                    11 de Noviembre, 2009
                </Paragraph>
            </View>

            <Title bold="true" size={45} style={{lineHeight: 1.2, color: defaultStyles.primary}}>
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
                <Paragraph style={{fontSize: 9, opacity: 0.8}}>
                    Version: Diciembre de 2025
                </Paragraph>
            </View>
        </Page>
    )
}

export {
    Cover
}
