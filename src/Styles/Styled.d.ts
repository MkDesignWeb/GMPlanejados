import 'styled-components'

declare module 'Styled-components' {
    export interface DefultTheme {
        title: string,

        colors: {
            primary: string,
            secudary: string,
            text: string
        },
    }
}