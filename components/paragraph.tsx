import type React from "react"
import {Font, Text} from "@react-pdf/renderer"
import {flatten} from "@react-pdf/stylesheet";

Font.register({
    family: 'Montserrat',
    fonts: [
        {
            src: './fonts/Montserrat/static/Montserrat-Regular.ttf',
            fontWeight: "normal",
        }
    ]

})

const Paragraph = (props: React.ComponentPropsWithRef<typeof Text>) => {
    return (
        <Text
            {...props}
            hyphenationCallback={value => [value]}
            style={flatten({
                fontFamily: 'Montserrat',
                fontSize: 13,
            }, props.style)}
        />
    )
}

export {Paragraph}