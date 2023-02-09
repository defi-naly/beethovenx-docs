import { useRouter } from 'next/router';

const Logo = ({ height }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} viewBox="19.89 19.61 80.28 43.85">
        <g>
            <path
                fill="#00f89c"
                d="m26.91,39.6c-2.4,0-3.95-1.3-4.95-2.75v2.47h-1.92v-18.25h1.92v7.92c1.05-1.55,2.57-2.87,4.95-2.87,3.1,0,6.17,2.45,6.17,6.72s-3.05,6.75-6.17,6.75Zm-.35-11.75c-2.4,0-4.67,2-4.67,5s2.27,5.02,4.67,5.02,4.55-1.85,4.55-5-2.1-5.02-4.55-5.02Z"
            ></path>
            <path
                fill="red"
                d="m44.37,28.42l-.3.3-.28.32-.31.29-.14.11-.24.18-.23.02-.16-.05-.25-.17-.36-.28-.39-.42-.25-.28-.38-.44-.36-.35-.21-.14-.18-.07-.18.04-.28.18-.16.16-.28.25-.73.86-.3.27-.16.16-.28.22-.26.02-.3-.15-.37-.36-.45-.47-.27-.3-.43-.35-.27-.3-.09-.16-.18-.28-.02-.26.21-.28.28-.32.26-.3.75-.66.24-.29.1-.11.17-.32-.02-.26-.2-.23-1.18-1.15-.27-.3-.16-.16-.2-.33-.06-.26.19-.27.14-.18.31-.29.3-.23.3-.27.4-.48.33-.27.3-.2.26-.02.27.19.45.43.55.61.62.54.25.17.16.09.21-.04.23-.16.26-.23.24-.29.68-.77.43-.45.26-.2.21-.07.16.02.2.16.14.1.25.28.39.49.29.28.45.36.41.4.16.23.06.19-.05.19-.17.25-.59.61-.3.27-.44.38-.23.27-.14.14-.14.25-.05.19.06.16.16.23.43.42.98.85.27.3.13.16.2.26.02.3-.15.34-.3.3-.45.43Zm-7.23-7.21l.13.23.02-.16-.05-.09-.09.02Zm-.78.94v-.04s-.09-.02-.09-.02v.04s.05.05.05.05l.03-.04Zm.46-.18v-.07s-.07,0-.07,0l-.03.04.02.02v.04s.05.02.05.02l.03-.04Zm.26-.2v-.04s-.07,0-.07,0l-.02.02v.04s.07,0,.07,0l.02-.02Zm-.14.21v.11s.07.07.07.07l.46-.18-.44-.08-.09.09Zm-.22.41l.03-.11-.02-.02-.05-.02-.07.07v.11s.11-.04.11-.04Zm.76-.89v.07s.07.03.07.03l.07-.07-.09-.05-.05.02Zm.06.3l-.09-.09-.09-.02.02.16.12.02.03-.07Zm-.43.8l.18.03-.09-.12-.14-.1-.02-.09-.12-.09.09.19h.04s.07.17.07.17Zm-.21-.03l-.05-.05-.11.04.02.09.05.02.09-.09Zm.44-.38l.02.12h.14s-.02.16-.02.16l.1-.14-.25-.14Zm.37-.23l-.02.09.32.07v-.04s-.25-.14-.25-.14l-.05.02Zm.13.54l.1-.18-.11-.17h-.04s-.02-.02-.02-.02l-.09-.02-.05.09.2.3Zm-.75.31l.16.12-.04-.11-.05-.05-.07.04Zm1.03-.77v.19s.08.19.08.19l.09-.02.07-.18-.11-.17-.12-.02Zm-.68.73h-.04s-.02.05-.02.05l.05.05.07-.04-.07-.07Zm-.06.49l-.09-.05.14-.25-.28.07.11.21.12.02Zm.97-1.32l.16.3.04.18-.16.16-.49.08-.03.11.07.14.23-.06-.02-.09.09-.05.16.16.19-.02.03-.07-.04-.07-.07.04-.05-.05.17-.32-.02-.09.09-.16-.35-.17Zm-.54.69h-.07s-.02.09-.02.09l.05.05.03-.14Zm-.07.39l.09-.02.04.03.3-.02v-.07s-.49-.03-.49-.03l-.05.12.04.03h.07s.02-.05.02-.05Zm-.01.33l-.04-.07.02-.09-.09-.05h-.11s-.19.23-.19.23l.04.03h.32s.05-.06.05-.06Zm.19-.2l-.02.12-.09.05v.07s.07,0,.07,0l.14-.14v-.14s-.11.04-.11.04Zm1.93,3.13l.03-.21.12-.09-.09-.09-.12.05.02.02-.07-.03-.02-.16.05-.02.03-.14-.07-.03-.09.05-.04-.03.02-.02-.07-.07.05-.05-.02-.05.19-.2.09.05.03-.04v-.07s-.05-.02-.05-.02l.03-.04-.02-.12-.09.02-.09.09-.05-.05v-.07s.09-.05.09-.05v-.11s-.09-.09-.09-.09l.07-.11-.05.09.18.17.03-.04-.02-.09-.07-.07v-.18s.1-.14.1-.14h.11s.1-.07.1-.07l.09.02v.14s-.02.02-.02.02h-.04s0,.04,0,.04l.02.02.09-.02.05.09-.17.39.05-.02-.02.02-.02.05.09-.02.02-.02v-.04s-.02-.02-.02-.02h-.04s.17-.14.17-.14h.07s.2.12.2.12l.02.19.12.02.02-.05h.07s.04.03.04.03l.16-.05-.02-.09-.64-.34-.04-.21.14-.28-.04-.11-.12-.02-.1.07-.16-.37-.17.11-.16-.16h-.04s.02-.05.02-.05l.12-.05.07-.14-.02-.02v-.04s-.04-.03-.04-.03l.14-.04-.09-.05-.09.05-.11-.14-.18-.21v-.26s-.08-.09-.08-.09l.07-.11-.11-.03-.09.05h-.04s-.07-.07-.07-.07l-.04-.14-.07.11.06.23-.32.11.05.05.35.03.07.07-.7-.03-.03.11-.19.16.09.33.23-.02.11.07-.32.11.02.09-.1.18-.3.16-.09-.02-.14-.14.02-.09.09-.02.05-.05v-.07s-.25.04-.25.04v-.18s-.02-.02-.02-.02l-.12.02-.05.05h-.07s-.03.07-.03.07l.57.59.05-.05.14-.04-.03.11.11.35.1-.07-.07-.25.03-.07-.02-.16.19-.23.16.02.07-.11.04.03.17-.14.05-.16-.04-.11-.09-.02-.02-.02.12-.27.16-.05.07.14-.05.09h-.07s-.03.04-.03.04l.56.06.02-.02.04.07-.07.04-.05.09.02.02-.07.07v.07s-.03.04-.03.04h-.28s-.16.13-.16.13l.09.09.04.14.09.05.09-.02.07-.07v-.04s.09.02.09.02l.07-.07-.04-.18.09-.05.02-.05.11.21v.19s-.14.12-.14.12h-.35s-.07.11-.07.11l.11.14.09.02-.14.04-.16-.16-.11.04-.07.11-.11.04-.04-.07.12-.27-.32.04-.02-.05h-.07s-.02.05-.02.05l.07.03.05.12-.02.09.04.07.05.02v.3s.28-.34.28-.34l.26.05-.03.04v.04s-.12-.02-.12-.02l-.17.18.07.18-.02.05-.1.07-.03.11.14.03.12-.12h.04s.07.1.07.1l-.02.12-.14.07.09.05.12-.05.05.12-.09.12-.02-.02-.05.02-.11-.03-.11.04-.09-.09-.09.05.04.07.09.05-.07.32-.12-.02-.05.12.26-.13.02-.16.05-.02-.02-.09-.07-.03.07-.07.11.03.09-.05-.1.14.02.23.05.05.05-.05.02-.12.03-.04.09.05.05-.05-.02-.09.05-.02.05.02.02.16-.05.02-.09.16-.23.09-.07.11.19-.06.13.16.21-.04.03-.07.09-.02v.07s.07,0,.07,0l.07-.07Zm-1.16-3.7l-.02.05.05.05h.04s-.04-.11-.04-.11h-.04Zm-.53.84l.02.05.05.02.07-.07v-.07s-.05-.02-.05-.02l-.07.04-.02.05Zm1.04.11l.07.03.07-.04.02-.05-.09-.05-.09.05.02.05Zm2-1.74l-.05.09.02.09.19-.13-.04-.07-.12.02Zm.23-.13l-.02.05.05.05h.04s.03-.04.03-.04l-.07-.07h-.04Zm.74,2.49l.03-.04.12-.02.05-.05h-.33s-.15-.33-.15-.33l-.06.42-.07.07-.08-.39.1-.21-.02-.12-.25-.24-.33.09v.25s-.07.11-.07.11l-.11-.32-.27-.12-.2-.3.05-.05-.02-.05.05-.09.19-.02-.02.09.07.07.09-.02-.04-.25.19-.02-.02-.12-.05-.05v-.07s-.09-.05-.09-.05l-.05.09-.07.04-.23.13-.08.23-.17.11.05.05.04.14-.02.02-.09-.05-.35.11.07.1.49-.04.18.14.04.21.12.09-.03.04.14.17.16.05.11-.04.02-.09.02-.02.28.14.04.14-.14.11-.07-.07v-.07s-.07-.03-.07-.03l-.06.49.14.14.03-.04h.04s.23-.2.23-.2l.14.03.23-.09.05.05h.04s.03-.11.03-.11l-.05-.09.02-.02v-.04Zm-4.08,1.41l.23.16h.04s.02-.02.02-.02l.22.28.05.02.05-.02-.2-.51.03-.11-.12-.09-.12.12.07.03.07-.04.02.02-.14.07-.02-.02-.03.04v-.04s-.02.02-.02.02l-.09-.02-.05-.05.02-.05-.05-.02-.05.02-.07.25.09.02.07-.07Zm3.97-4.26v.04s.04.03.04.03l.05.02.02-.02v-.04s-.02-.02-.02-.02l-.09-.02Zm-.83.86v.35s.06.05.06.05l.23-.13-.02-.09-.25-.21-.02.02Zm.4-.2l-.23.09-.03.14.09-.09.11.1.14.03-.07-.28Zm-1.28,1.43l-.09-.05-.17.11.02.05.07.03.16-.09.02-.05Zm2.03-2.23l.02.05.09-.02.09-.09.07.03.09-.02-.2-.12-.16.16Zm-3.71,3.96l.12-.02-.05-.09-.07-.03v.14Zm3.51-3.46l-.05-.09h-.11s0,.04,0,.04l.09.12.07-.07Zm-4.59,4.68l.12-.16-.09-.02-.02.02h-.04s-.09.05-.09.05l.02.09.09.02Zm4.81-4.8l.03-.04-.09-.09h-.11s.04.11.04.11l.12.05v-.04Zm-.49.22l-.05.05v.07s.14-.14.14-.14l-.09.02Zm-3.87,4.16l.02-.16-.21.18.04.07h.07s.09-.09.09-.09Zm-1.48,1.48l-.02-.09h-.04s-.03.07-.03.07l.05.05.03-.04Zm5.3-5.48l-.12.16.17-.11-.05-.05Zm-3.28,3.62l.21-.11.07-.14-.11-.07-.14.11-.03.21Zm2.96-2.68l-.04-.07-.09-.02-.04-.03h-.04s-.02-.09-.02-.09l-.09.02-.02.09.27.15.05-.05Zm-.98.72l-.09.02-.05.05-.07-.03-.07.04-.07.18.07.03.07-.07.27.15-.02-.33.05-.02v-.07s-.05-.02-.05-.02l-.03.07Zm-3.46,3.55l-.02-.09-.14.04-.03.07.02.05h.07s.1-.07.1-.07Zm2.39-2.6l.07.14-.07.04-.16-.02.16-.16Zm2.75-2.71v.04s-.17.07-.17.07l-.03.21.4-.38-.19.06Zm-4.71,4.8l.12.12h.07s.14.14.14.14l.66-.57.03-.18-.43.48h-.11s-.09-.09-.09-.09l.05-.09-.14-.1-.31.29Zm.68-.66l.02.05.09-.02.02-.05-.07-.07-.05.09Zm3.58-3.61h.04s.07-.07.07-.07v-.04s-.05-.02-.05-.02l-.07.07.02.05Zm-.07.18l-.11-.07-.05.05v.07s.05.02.05.02l.04.07-.07.21.05.16h.04s.02-.02.02-.02l.03-.49Zm-.41.57l-.02-.05-.05-.02-.07.04v.04s.07.07.07.07h.04s.03-.07.03-.07Zm-4.52,4.53l.09.02.12-.12-.02-.02h-.04s-.03.04-.03.04l-.12.02v.07Zm2.99-3.11l-.07.11.07-.11Zm2.92-2.96l-.02.05.04.03h.07s0-.07,0-.07l-.04-.03-.02.02h-.04Zm.21-.18l.16.02.09-.05v-.04s-.04-.03-.04-.03l-.21.11Zm-4.72,4.93l.07.03v-.04s-.05-.09-.05-.09l-.03.04.02.05Zm5.05-5.23l-.02.09h.07s.02-.09.02-.09h-.07Zm-6.36,6.53v.04s-.02-.02-.02-.02l.02-.02Zm-.08.27l-.02-.05-.04-.03-.09.05.05.05h.07s.02-.02.02-.02Zm5.9-6.1h-.11s-.07.07-.07.07l.18.49.08-.48-.09-.09Zm-5.05,5.26l.02-.05-.02-.02h-.07s0,.04,0,.04l-.02.02.09.02Zm2.36-2.32l-.14.07.11.17.02.02.07-.07.03-.46-.14.11.05.16Zm1.94-2.14l-.09.05.09.05.09-.05-.09-.05Zm.44-.23h-.18s.12.09.12.09l.17-.25-.12.02v.14Zm-.04,1.07h-.07s-.18-.14-.18-.14l-.02-.19-.11-.14.03-.21-.23.06.02.23h.11s.05.09.05.09l-.16.16.02.19.09.05.05-.05-.04-.07.05-.05h.07s.27.19.27.19l.09-.05.18.1.17-.35-.4.2Zm-4.79,3.92l.14-.04.03-.07-.11-.07-.05.02-.05.09.04.07Zm5.33-5.51v.07s.04,0,.04,0l.02.02.02-.02v-.04s-.07-.03-.07-.03Zm-1.97,2.88l.14.07.09.12.14.03.09-.05.04.14h.04s.02-.02.02-.02v-.07s-.05-.09-.05-.09l.02-.02-.16-.05-.04-.07h-.07s-.02-.02-.02-.02l-.02.02-.18-.07-.07-.1v-.21s-.15-.14-.15-.14l-.05.09-.04-.03h-.04s-.02.09-.02.09h-.07s-.03.21-.03.21l.12.05.09-.05-.02-.05.05-.05.14.28-.14-.03.09.16.07-.04.02-.09Zm-3.46,2.92v-.04s-.05-.02-.05-.02l-.05.05v.04s.11-.04.11-.04Zm5.09-5.09l-.09-.05-.28.22.18.1.17-.11v-.04s.02-.02.02-.02v-.11Zm-3.89,4.07l-.11-.14-.24.21.07.03.16-.13.12.02Zm.33-.02l-.04-.21h-.23s.23.25.23.25l.03-.04Zm1.04-1.39l.02-.12h-.04s-.05.09-.05.09l.07.03Zm2.8-2.94l-.02.05.02.05.05.02.1-.07.02-.09-.09-.02-.09.05Zm-3.11,3.27l.14.03.11.21.05.02.03-.04.05.09.05.02.07.21.23.05-.47-.56.12-.05.02.02.28-.11-.05.16.24-.18v-.04s.12-.05.12-.05l-.55-.12-.11-.1.02.16-.03.04-.02.09-.33.16Zm-1.75,1.77l.07.03.16-.09v-.14s-.11.14-.11.14h-.07s-.05.05-.05.05Zm3.11-3.12l.04.07.04.03.09-.09-.04-.07-.09-.02-.03.07Zm1.69-1.56l-.09-.05h-.04s-.03.04-.03.04v.26s0,.02,0,.02h.04s.12-.27.12-.27Zm-5.51,5.66l.02-.05-.02-.02-.09-.02v.07s.09.02.09.02Zm5.37-5.16l.03-.11-.14-.03-.26.09.04.11.18.07.16-.13Zm-2.31,2.02l.09-.02.05-.05-.05-.05-.09.05v.07Zm-1.6,1.75v-.04s-.02-.02-.02-.02l-.09-.02-.05.05.07.03.09-.02Zm4.41-4.53l-.03.07.07.07.03-.04.02-.12-.09.02Zm-1.53,1.61l-.02.02v-.04s.02.02.02.02Zm.47-.34l.02-.02-.05-.02-.09.09.12-.02v-.04Zm-3.53,3.59l-.09.05.07.07.14.03.14-.11-.25.04-.02-.09Zm-.59.96v-.11s-.06-.09-.06-.09l-.11-.03-.05.09.05.05h.07s.09.09.09.09Zm1.35-1.5l-.07-.07h-.07s-.05.05-.05.05h.19Zm-.37.25l-.09.05-.03.07.02.02h.04s.05-.05.05-.05l.02-.09Zm2.52-2.27l-.02.02-.02-.02h.04Zm-.74,1.3l.12-.16-.28-.21v.14s.16.02.16.02l.02.02v.19Zm-2.94,2.82l.02-.05-.04-.07-.02-.05-.03.04v.14s.07,0,.07,0Zm3.33-3.46l-.05-.02-.07.04-.02.05.04.11.35.03v-.04s-.25-.17-.25-.17Zm0,.7l.12-.23-.14-.24h-.14s-.07.11-.07.11l.2.19.04.18Zm-.75.49l-.04-.11-.09-.09-.09.05.21.14Zm.11.46l-.07-.1.14-.14.03-.14-.35.08v.07s.07.07.07.07l.04.14.14.03Zm.2-.57l-.07-.07-.09.05.09.09h.07s0-.07,0-.07Zm.81-.94l.06.47.12-.02.1-.21-.14-.21-.14-.03Zm.56,1.03l.03-.11-.04-.07-.09.02-.07-.03.22-.41-.04-.11.14-.21-.43-.24.04.18.09.09.09.33-.61.34-.23-.05.06.3.28-.04-.02-.12.14-.07.16.23.26-.02Zm-.97-.22l-.02-.09h-.07s-.03.11-.03.11l.05.09.07-.11Zm.41.4v-.07s-.14-.03-.14-.03l-.14.07-.34-.08-.05.05.04.14h.07s.14-.11.14-.11l.07.07.35-.04Zm-.56.43l-.04-.21-.11-.07h-.11s-.03.11-.03.11l-.02-.02-.1.11-.09.02-.03.07.05.05h.42s.05-.06.05-.06Zm.39-.11v-.18s-.04,0-.04,0l-.09.05-.02.09-.03.04v.04s-.1.04-.1.04v.11s.09.02.09.02l.05-.09h.04s.1-.11.1-.11Zm.96-.66l-.02-.12-.07-.03-.02.05.02.05.09.05Zm-.78.8l-.02.05.04.07.05.02.09-.09-.02-.05-.07-.03-.07.04Zm.19.74l.03-.07-.07-.1.19-.3h-.39s-.04-.06-.04-.06h-.07s-.03.07-.03.07l.09.05.02.09.07.07-.07.11.05.09.21.07Zm.49-1.36l.02.05.07.03.09-.02.05-.05-.12-.09-.1.07Zm-.09,1.23l.02-.05-.02-.05-.07-.03-.1.07.02.05.07.03.09-.02Zm.76-.13l-.11-.14-.14.04-.43.41v.11s.05.05.05.05l.42-.46.11.03.11-.04Zm.33-.3l.02-.09-.11-.1-.09.02-.02.09.05.09.07.03.07-.04Zm-.2.95l-.11-.21v-.21s-.16.23-.16.23l.2.23.07-.04Zm-.47.27v-.04s-.04-.03-.04-.03l-.09.05.02.05.05.02.05-.05Zm.87-.65l.05-.02v-.04s-.02-.02-.02-.02l-.05-.02-.07.04.09.05Zm-.69,1.07l-.04-.11-.12-.05.11.17h.04s.02-.02.02-.02Zm1.25-1.43l-.03.07.04.11.05-.02.02-.05v-.07s-.04-.03-.04-.03h-.04Zm-.81,1.16l.05-.09-.02-.05h-.04s-.05.09-.05.09l.02.05h.04Z"
            ></path>
        </g>
        <g>
            <path fill="currentColor" d="m46.94,41.75v1.57h-15.1v-1.57h15.1Z"></path>
            <path
                fill="currentColor"
                d="m58.16,39.32v-2.6c-1.05,1.55-2.57,2.87-4.95,2.87-3.1,0-6.17-2.45-6.17-6.72s3.07-6.75,6.17-6.75c2.4,0,3.95,1.3,4.95,2.75v-7.8h1.92v18.25h-1.92Zm-4.6-11.47c-2.5,0-4.55,1.85-4.55,5s2.1,5.02,4.55,5.02,4.67-2,4.67-5.02-2.27-5-4.67-5Z"
            ></path>
            <path
                fill="currentColor"
                d="m69.04,39.62c-3.87,0-6.7-3.05-6.7-6.72s2.85-6.77,6.75-6.77,6.72,3.05,6.72,6.72-2.87,6.77-6.77,6.77Zm0-11.8c-2.8,0-4.72,2.22-4.72,5.02s2.05,5.05,4.77,5.05,4.75-2.22,4.75-5-2.07-5.07-4.8-5.07Z"
            ></path>
            <path
                fill="currentColor"
                d="m83.86,39.62c-3.77,0-6.62-3.07-6.62-6.72s2.85-6.77,6.62-6.77c2.45,0,3.97,1.02,5.17,2.3l-1.27,1.35c-1.02-1.07-2.17-1.95-3.92-1.95-2.62,0-4.62,2.22-4.62,5.02s2.05,5.05,4.75,5.05c1.65,0,2.92-.82,3.95-1.92l1.22,1.15c-1.3,1.45-2.85,2.5-5.27,2.5Z"
            ></path>
            <path
                fill="currentColor"
                d="m95.34,39.57c-1.85,0-3.9-.73-5.35-1.9l.97-1.38c1.4,1.05,2.95,1.65,4.47,1.65s2.67-.8,2.67-2.05v-.05c0-1.3-1.52-1.8-3.22-2.27-2.02-.57-4.27-1.27-4.27-3.65v-.05c0-2.22,1.85-3.7,4.4-3.7,1.57,0,3.32.55,4.65,1.42l-.88,1.45c-1.2-.77-2.57-1.25-3.82-1.25-1.52,0-2.5.8-2.5,1.87v.05c0,1.22,1.6,1.7,3.32,2.22,2,.6,4.15,1.37,4.15,3.7v.05c0,2.45-2.02,3.87-4.6,3.87Z"
            ></path>
        </g>
        <g>
            <path
                fill="#00f89c"
                d="m19.89,57.46h1.2v1.8h.6v-.6h.6v-.6h.6v-.6h1.2v1.2h-.6v.6h-.6v.6h-.6v1.2h.6v.6h.6v.6h.6v1.2h-1.2v-.6h-.6v-.6h-.6v-.6h-.6v1.8h-1.2v-6Z"
            ></path>
            <path
                fill="#00f89c"
                d="m25.17,57.46h1.2v1.2h.6v1.2h.6v.6h.6v-3h1.2v6h-1.2v-1.2h-.6v-.6h-.6v-.6h-.6v2.4h-1.2v-6Z"
            ></path>
            <path
                fill="#00f89c"
                d="m30.45,58.06h.6v-.6h2.4v.6h.6v4.8h-.6v.6h-2.4v-.6h-.6v-4.8Zm1.2,4.2h1.2v-3.6h-1.2v3.6Z"
            ></path>
            <path fill="#00f89c" d="m35.13,57.46h1.2v4.8h.6v-3h.6v3h.6v-4.8h1.2v5.4h-.6v.6h-3v-.6h-.6v-5.4Z"></path>
            <path fill="#00f89c" d="m40.41,57.46h1.2v4.8h2.4v1.2h-3.6v-6Z"></path>
            <path fill="#00f89c" d="m45.09,57.46h3.6v1.2h-2.4v1.2h1.8v1.2h-1.8v1.2h2.4v1.2h-3.6v-6Z"></path>
            <path fill="#00f89c" d="m49.77,57.46h3v.6h.6v4.8h-.6v.6h-3v-6Zm1.2,4.8h1.2v-3.6h-1.2v3.6Z"></path>
            <path
                fill="#00f89c"
                d="m54.45,58.06h.6v-.6h3v1.2h-2.4v3.6h1.2v-1.2h-.6v-1.2h1.8v3h-.6v.6h-2.4v-.6h-.6v-4.8Z"
            ></path>
            <path fill="#00f89c" d="m59.13,57.46h3.6v1.2h-2.4v1.2h1.8v1.2h-1.8v1.2h2.4v1.2h-3.6v-6Z"></path>
            <path
                fill="#00f89c"
                d="m67.89,58.06h.6v-.6h2.4v.6h.6v1.2h-1.2v-.6h-1.2v3.6h1.2v-.6h1.2v1.2h-.6v.6h-2.4v-.6h-.6v-4.8Z"
            ></path>
            <path fill="#00f89c" d="m72.57,57.46h3.6v1.2h-2.4v1.2h1.8v1.2h-1.8v1.2h2.4v1.2h-3.6v-6Z"></path>
            <path
                fill="#00f89c"
                d="m77.25,57.46h1.2v1.2h.6v1.2h.6v.6h.6v-3h1.2v6h-1.2v-1.2h-.6v-.6h-.6v-.6h-.6v2.4h-1.2v-6Z"
            ></path>
            <path fill="#00f89c" d="m82.53,57.46h3.6v1.2h-1.2v4.8h-1.2v-4.8h-1.2v-1.2Z"></path>
            <path
                fill="#00f89c"
                d="m87.21,57.46h3v.6h.6v2.4h-.6v.6h-.6v.6h.6v.6h.6v1.2h-1.2v-.6h-.6v-.6h-.6v1.2h-1.2v-6Zm1.2,2.4h1.2v-1.2h-1.2v1.2Z"
            ></path>
            <path
                fill="#00f89c"
                d="m91.89,58.06h.6v-.6h2.4v.6h.6v5.4h-1.2v-2.4h-1.2v2.4h-1.2v-5.4Zm1.2.6v1.2h1.2v-1.2h-1.2Z"
            ></path>
            <path fill="#00f89c" d="m96.57,57.46h1.2v4.8h2.4v1.2h-3.6v-6Z"></path>
        </g>
    </svg>
);

const Vercel = ({ height = 20 }) => (
    <svg height={height} viewBox="0 0 283 64" fill="none">
        <path
            fill="currentColor"
            d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
        />
    </svg>
);

const TITLE_WITH_TRANSLATIONS = {
    'en-US': 'DeFi Re-Imagineered',
    'zh-CN': '用于数据请求的 React Hooks 库',
    'es-ES': 'Biblioteca React Hooks para la obtención de datos',
    'pt-BR': ' React Hooks para Data Fetching',
    ja: 'データ取得のための React Hooks ライブラリ',
    ko: '데이터 가져오기를 위한 React Hooks',
    ru: 'React хуки для выборки данных',
};

const FEEDBACK_LINK_WITH_TRANSLATIONS = {
    'en-US': 'Question? Give us feedback →',
    'zh-CN': '有疑问？给我们反馈 →',
    'pt-BR': 'Dúvidas? Nos dê feedback →',
};

export default {
    projectLink: 'https://github.com/beethovenxfi',
    docsRepositoryBase: 'https://github.com/beethovenxfi/beethovenx-docs/blob/main/pages',
    titleSuffix: ' – Beethoven X',
    search: true,
    unstable_flexsearch: true,
    floatTOC: true,
    feedbackLink: () => {
        const { locale } = useRouter();
        return FEEDBACK_LINK_WITH_TRANSLATIONS[locale] || FEEDBACK_LINK_WITH_TRANSLATIONS['en-US'];
    },
    feedbackLabels: 'feedback',
    logo: () => <Logo height={56} />,
    head: ({ title, meta }) => {
        const { route } = useRouter();

        const ogImage = meta.image || '/doxMatrix1.5x.png';

        return (
            <>
                {/* Favicons, meta */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta httpEquiv="Content-Language" content="en" />
                <meta
                    name="description"
                    content={
                        meta.description ||
                        'Innovation meets imagination. Beethoven X is a next generation decentralized investment platform built for the future of finance. Leveraging the most advanced technology in the industry, we provide innovative, capital-efficient, and sustainable solutions for all DeFi users.'
                    }
                />
                <meta
                    name="og:description"
                    content={
                        meta.description ||
                        'Innovation meets imagination. Beethoven X is a next generation decentralized investment platform built for the future of finance. Leveraging the most advanced technology in the industry, we provide innovative, capital-efficient, and sustainable solutions for all DeFi users.'
                    }
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@beethoven_x" />
                <meta name="twitter:image" content={ogImage} />
                <meta name="og:title" content={title ? title + ' – BeethovenX' : 'BeethovenX - Documents'} />
                <meta name="og:image" content={ogImage} />
                <meta name="apple-mobile-web-app-title" content="BeethovenX" />
            </>
        );
    },
    footerEditLink: ({ locale }) => {
        switch (locale) {
            case 'zh-CN':
                return '在 GitHub 上编辑本页 →';
            case 'es-ES':
                return 'Edite esta página en GitHub →';
            case 'pt-BR':
                return 'Edite essa página no GitHub →';
            case 'ja':
                return 'Github で編集する →';
            case 'ko':
                return 'Github에서 이 페이지 편집하기 →';
            case 'ru':
                return 'Редактировать на GitHub →';
            default:
                return 'Edit this page on GitHub →';
        }
    },
    footerText: ({ locale }) => {
        switch (locale) {
            case 'zh-CN':
                return (
                    <a
                        href="https://vercel.com/?utm_source=swr_zh-cn"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center no-underline text-current font-semibold"
                    >
                        <span className="mr-2">由</span>
                        <span className="mr-2">
                            <Vercel />
                        </span>
                        驱动
                    </a>
                );
            case 'es-ES':
                return (
                    <a
                        href="https://vercel.com/?utm_source=swr_es-es"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center no-underline text-current font-semibold"
                    >
                        <span className="mr-2">Desarrollado por</span>
                        <span className="mr-2">
                            <Vercel />
                        </span>
                    </a>
                );
            case 'pt-BR':
                return (
                    <a
                        href="https://vercel.com/?utm_source=swr_es-es"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center no-underline text-current font-semibold"
                    >
                        <span className="mr-2">Desenvolvido por</span>
                        <span className="mr-2">
                            <Vercel />
                        </span>
                    </a>
                );
            case 'ja':
                return (
                    <a
                        href="https://vercel.com/?utm_source=swr_ja"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center no-underline text-current font-semibold"
                    >
                        <span className="mr-2">提供</span>
                        <span className="mr-2">
                            <Vercel />
                        </span>
                    </a>
                );
            case 'ko':
                return (
                    <a
                        href="https://vercel.com/?utm_source=swr_ko"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center no-underline text-current font-semibold"
                    >
                        <span className="mr-2">Powered by</span>
                        <span className="mr-2">
                            <Vercel />
                        </span>
                    </a>
                );
            case 'ru':
                return (
                    <a
                        href="https://vercel.com/?utm_source=swr_ru"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center no-underline text-current font-semibold"
                    >
                        <span className="mr-2">Работает на</span>
                        <span className="mr-2">
                            <Vercel />
                        </span>
                    </a>
                );
            default:
                return (
                    <a
                        href="https://vercel.com/"
                        target="_blank"
                        rel="noopener"
                        className="inline-flex items-center no-underline text-current font-semibold"
                    >
                        <span className="mr-1">Powered by</span>
                        <span>
                            <Vercel />
                        </span>
                    </a>
                );
        }
    },
    i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: '', text: 'More coming soon...' },
        /*{ locale: 'es-ES', text: 'Español' },
        { locale: 'zh-CN', text: '简体中文' },
        { locale: 'pt-BR', text: 'Português Brasileiro' },
        { locale: 'ja', text: '日本語' },
        { locale: 'ko', text: '한국어' },
        { locale: 'ru', text: 'Русский' },*/
    ],
};
