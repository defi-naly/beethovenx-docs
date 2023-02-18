import { useRouter } from 'next/router';

const Logo = ({ height = 24 }) => (
    <svg height={height} width="80" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M6.87 19.99C4.47 19.99 2.92 18.69 1.92 17.24V19.71H0V1.45999H1.92V9.37999C2.97 7.82999 4.49 6.50999 6.87 6.50999C9.97 6.50999 13.04 8.95999 13.04 13.23C13.04 17.5 9.99 19.98 6.87 19.98V19.99ZM6.52 8.23999C4.12 8.23999 1.85 10.24 1.85 13.24C1.85 16.24 4.12 18.26 6.52 18.26C8.92 18.26 11.07 16.41 11.07 13.26C11.07 10.11 8.97 8.23999 6.52 8.23999Z"
            fill="#00F89C"
        />
        <path
            d="M24.3292 8.81L24.0292 9.11L23.7492 9.43L23.4392 9.72L23.2992 9.83L23.0592 10.01L22.8292 10.03L22.6692 9.98L22.4192 9.81L22.0592 9.53L21.6692 9.11L21.4192 8.83L21.0392 8.39L20.6792 8.04L20.4692 7.9L20.2892 7.83L20.1092 7.87L19.8292 8.05L19.6692 8.21L19.3892 8.46L18.6592 9.32L18.3592 9.59L18.1992 9.75L17.9192 9.97L17.6592 9.99L17.3592 9.84L16.9892 9.48L16.5392 9.01L16.2692 8.71L15.8392 8.36L15.5692 8.06L15.4792 7.9L15.2992 7.62L15.2792 7.36L15.4892 7.08L15.7692 6.76L16.0292 6.46L16.7792 5.8L17.0192 5.51L17.1192 5.4L17.2892 5.08L17.2692 4.82L17.0692 4.59L15.8892 3.44L15.6192 3.14L15.4592 2.98L15.2592 2.65L15.1992 2.39L15.3892 2.12L15.5292 1.94L15.8392 1.65L16.1392 1.42L16.4392 1.15L16.8392 0.67L17.1692 0.4L17.4692 0.199999L17.7292 0.18L17.9992 0.369999L18.4492 0.799999L18.9992 1.41L19.6192 1.95L19.8692 2.12L20.0292 2.21L20.2392 2.17L20.4692 2.01L20.7292 1.78L20.9692 1.49L21.6492 0.719999L22.0792 0.269999L22.3392 0.0699997L22.5492 0L22.7092 0.0199986L22.9092 0.18L23.0492 0.279999L23.2992 0.559999L23.6892 1.05L23.9792 1.33L24.4292 1.69L24.8392 2.09L24.9992 2.32L25.0592 2.51L25.0092 2.7L24.8392 2.95L24.2492 3.56L23.9492 3.83L23.5092 4.21L23.2792 4.48L23.1392 4.62L22.9992 4.87L22.9492 5.06L23.0092 5.22L23.1692 5.45L23.5992 5.87L24.5792 6.72L24.8492 7.02L24.9792 7.18L25.1792 7.44L25.1992 7.74L25.0492 8.08L24.7492 8.38L24.2992 8.81H24.3292ZM17.0992 1.6L17.2292 1.83L17.2492 1.67L17.1992 1.58L17.1092 1.6H17.0992ZM16.3192 2.54V2.5L16.2292 2.48V2.52L16.2792 2.57L16.3092 2.53L16.3192 2.54ZM16.7792 2.36V2.29H16.7092L16.6792 2.33L16.6992 2.35V2.39L16.7492 2.41L16.7792 2.37V2.36ZM17.0392 2.16V2.12H16.9692L16.9492 2.14V2.18H17.0192L17.0392 2.16ZM16.8992 2.37V2.48L16.9692 2.55L17.4292 2.37L16.9892 2.29L16.8992 2.38V2.37ZM16.6792 2.78L16.7092 2.67L16.6892 2.65L16.6392 2.63L16.5692 2.7V2.81L16.6792 2.77V2.78ZM17.4392 1.89V1.96L17.5092 1.99L17.5792 1.92L17.4892 1.87L17.4392 1.89ZM17.4992 2.19L17.4092 2.1L17.3192 2.08L17.3392 2.24L17.4592 2.26L17.4892 2.19H17.4992ZM17.0692 2.99L17.2492 3.02L17.1592 2.9L17.0192 2.8L16.9992 2.71L16.8792 2.62L16.9692 2.81H17.0092L17.0792 2.98L17.0692 2.99ZM16.8592 2.96L16.8092 2.91L16.6992 2.95L16.7192 3.04L16.7692 3.06L16.8592 2.97V2.96ZM17.2992 2.58L17.3192 2.7H17.4592L17.4392 2.86L17.5392 2.72L17.2892 2.58H17.2992ZM17.6692 2.35L17.6492 2.44L17.9692 2.51V2.47L17.7192 2.33L17.6692 2.35ZM17.7992 2.89L17.8992 2.71L17.7892 2.54H17.7492L17.7292 2.52L17.6392 2.5L17.5892 2.59L17.7892 2.89H17.7992ZM17.0492 3.2L17.2092 3.32L17.1692 3.21L17.1192 3.16L17.0492 3.2ZM18.0792 2.43V2.62L18.1592 2.81L18.2492 2.79L18.3192 2.61L18.2092 2.44L18.0892 2.42L18.0792 2.43ZM17.3992 3.16H17.3592L17.3392 3.21L17.3892 3.26L17.4592 3.22L17.3892 3.15L17.3992 3.16ZM17.3392 3.65L17.2492 3.6L17.3892 3.35L17.1092 3.42L17.2192 3.63L17.3392 3.65ZM18.3092 2.33L18.4692 2.63L18.5092 2.81L18.3492 2.97L17.8592 3.05L17.8292 3.16L17.8992 3.3L18.1292 3.24L18.1092 3.15L18.1992 3.1L18.3592 3.26L18.5492 3.24L18.5792 3.17L18.5392 3.1L18.4692 3.14L18.4192 3.09L18.5892 2.77L18.5692 2.68L18.6592 2.52L18.3092 2.35V2.33ZM17.7692 3.02H17.6992L17.6792 3.11L17.7292 3.16L17.7592 3.02H17.7692ZM17.6992 3.41L17.7892 3.39L17.8292 3.42L18.1292 3.4V3.33L17.6392 3.3L17.5892 3.42L17.6292 3.45H17.6992L17.7192 3.4L17.6992 3.41ZM17.6892 3.74L17.6492 3.67L17.6692 3.58L17.5792 3.53H17.4692L17.2792 3.76L17.3192 3.79H17.6392L17.6892 3.73V3.74ZM17.8792 3.54L17.8592 3.66L17.7692 3.71V3.78H17.8392L17.9792 3.64V3.5L17.8692 3.54H17.8792ZM19.8092 6.67L19.8392 6.46L19.9592 6.37L19.8692 6.28L19.7492 6.33L19.7692 6.35L19.6992 6.32L19.6792 6.16L19.7292 6.14L19.7592 6L19.6892 5.97L19.5992 6.02L19.5592 5.99L19.5792 5.97L19.5092 5.9L19.5592 5.85L19.5392 5.8L19.7292 5.6L19.8192 5.65L19.8492 5.61V5.54L19.7992 5.52L19.8292 5.48L19.8092 5.36L19.7192 5.38L19.6292 5.47L19.5792 5.42V5.35L19.6692 5.3V5.19L19.5792 5.1L19.6492 4.99L19.5992 5.08L19.7792 5.25L19.8092 5.21L19.7892 5.12L19.7192 5.05V4.87L19.8192 4.73H19.9292L20.0292 4.66L20.1192 4.68V4.82L20.0992 4.84H20.0592V4.88L20.0792 4.9L20.1692 4.88L20.2192 4.97L20.0492 5.36L20.0992 5.34L20.0792 5.36L20.0592 5.41L20.1492 5.39L20.1692 5.37V5.33L20.1492 5.31H20.1092L20.2792 5.17H20.3492L20.5492 5.29L20.5692 5.48L20.6892 5.5L20.7092 5.45H20.7792L20.8192 5.48L20.9792 5.43L20.9592 5.34L20.3192 5L20.2792 4.79L20.4192 4.51L20.3792 4.4L20.2592 4.38L20.1592 4.45L19.9992 4.08L19.8292 4.19L19.6692 4.03H19.6292L19.6492 3.98L19.7692 3.93L19.8392 3.79L19.8192 3.77V3.73L19.7792 3.7L19.9192 3.66L19.8292 3.61L19.7392 3.66L19.6292 3.52L19.4492 3.31V3.05L19.3692 2.96L19.4392 2.85L19.3292 2.82L19.2392 2.87H19.1992L19.1292 2.8L19.0892 2.66L19.0192 2.77L19.0792 3L18.7592 3.11L18.8092 3.16L19.1592 3.19L19.2292 3.26L18.5292 3.23L18.4992 3.34L18.3092 3.5L18.3992 3.83L18.6292 3.81L18.7392 3.88L18.4192 3.99L18.4392 4.08L18.3392 4.26L18.0392 4.42L17.9492 4.4L17.8092 4.26L17.8292 4.17L17.9192 4.15L17.9692 4.1V4.03L17.7192 4.07V3.89L17.6992 3.87L17.5792 3.89L17.5292 3.94H17.4592L17.4292 4.01L17.9992 4.6L18.0492 4.55L18.1892 4.51L18.1592 4.62L18.2692 4.97L18.3692 4.9L18.2992 4.65L18.3292 4.58L18.3092 4.42L18.4992 4.19L18.6592 4.21L18.7292 4.1L18.7692 4.13L18.9392 3.99L18.9892 3.83L18.9492 3.72L18.8592 3.7L18.8392 3.68L18.9592 3.41L19.1192 3.36L19.1892 3.5L19.1392 3.59H19.0692L19.0392 3.63L19.5992 3.69L19.6192 3.67L19.6592 3.74L19.5892 3.78L19.5392 3.87L19.5592 3.89L19.4892 3.96V4.03L19.4592 4.07H19.1792L19.0192 4.2L19.1092 4.29L19.1492 4.43L19.2392 4.48L19.3292 4.46L19.3992 4.39V4.35L19.4892 4.37L19.5592 4.3L19.5192 4.12L19.6092 4.07L19.6292 4.02L19.7392 4.23V4.42L19.5992 4.54H19.2492L19.1792 4.65L19.2892 4.79L19.3792 4.81L19.2392 4.85L19.0792 4.69L18.9692 4.73L18.8992 4.84L18.7892 4.88L18.7492 4.81L18.8692 4.54L18.5492 4.58L18.5292 4.53H18.4592L18.4392 4.58L18.5092 4.61L18.5592 4.73L18.5392 4.82L18.5792 4.89L18.6292 4.91V5.21L18.9092 4.87L19.1692 4.92L19.1392 4.96V5L19.0192 4.98L18.8492 5.16L18.9192 5.34L18.8992 5.39L18.7992 5.46L18.7692 5.57L18.9092 5.6L19.0292 5.48H19.0692L19.1392 5.58L19.1192 5.7L18.9792 5.77L19.0692 5.82L19.1892 5.77L19.2392 5.89L19.1492 6.01L19.1292 5.99L19.0792 6.01L18.9692 5.98L18.8592 6.02L18.7692 5.93L18.6792 5.98L18.7192 6.05L18.8092 6.1L18.7392 6.42L18.6192 6.4L18.5692 6.52L18.8292 6.39L18.8492 6.23L18.8992 6.21L18.8792 6.12L18.8092 6.09L18.8792 6.02L18.9892 6.05L19.0792 6L18.9792 6.14L18.9992 6.37L19.0492 6.42L19.0992 6.37L19.1192 6.25L19.1492 6.21L19.2392 6.26L19.2892 6.21L19.2692 6.12L19.3192 6.1L19.3692 6.12L19.3892 6.28L19.3392 6.3L19.2492 6.46L19.0192 6.55L18.9492 6.66L19.1392 6.6L19.2692 6.76L19.4792 6.72L19.5092 6.65L19.5992 6.63V6.7H19.6692L19.7392 6.63L19.8092 6.67ZM18.6492 2.97L18.6292 3.02L18.6792 3.07H18.7192L18.6792 2.96H18.6392L18.6492 2.97ZM18.1192 3.81L18.1392 3.86L18.1892 3.88L18.2592 3.81V3.74L18.2092 3.72L18.1392 3.76L18.1192 3.81ZM19.1592 3.92L19.2292 3.95L19.2992 3.91L19.3192 3.86L19.2292 3.81L19.1392 3.86L19.1592 3.91V3.92ZM21.1592 2.18L21.1092 2.27L21.1292 2.36L21.3192 2.23L21.2792 2.16L21.1592 2.18ZM21.3892 2.05L21.3692 2.1L21.4192 2.15H21.4592L21.4892 2.11L21.4192 2.04H21.3792L21.3892 2.05ZM22.1292 4.54L22.1592 4.5L22.2792 4.48L22.3292 4.43H21.9992L21.8492 4.1L21.7892 4.52L21.7192 4.59L21.6392 4.2L21.7392 3.99L21.7192 3.87L21.4692 3.63L21.1392 3.72V3.97L21.0692 4.08L20.9592 3.76L20.6892 3.64L20.4892 3.34L20.5392 3.29L20.5192 3.24L20.5692 3.15L20.7592 3.13L20.7392 3.22L20.8092 3.29L20.8992 3.27L20.8592 3.02L21.0492 3L21.0292 2.88L20.9792 2.83V2.76L20.8892 2.71L20.8392 2.8L20.7692 2.84L20.5392 2.97L20.4592 3.2L20.2892 3.31L20.3392 3.36L20.3792 3.5L20.3592 3.52L20.2692 3.47L19.9192 3.58L19.9892 3.68L20.4792 3.64L20.6592 3.78L20.6992 3.99L20.8192 4.08L20.7892 4.12L20.9292 4.29L21.0892 4.34L21.1992 4.3L21.2192 4.21L21.2392 4.19L21.5192 4.33L21.5592 4.47L21.4192 4.58L21.3492 4.51V4.44L21.2792 4.41L21.2192 4.9L21.3592 5.04L21.3892 5H21.4292L21.6592 4.8L21.7992 4.83L22.0292 4.74L22.0792 4.79H22.1192L22.1492 4.68L22.0992 4.59L22.1192 4.57V4.53L22.1292 4.54ZM18.0492 5.95L18.2792 6.11H18.3192L18.3392 6.09L18.5592 6.37L18.6092 6.39L18.6592 6.37L18.4592 5.86L18.4892 5.75L18.3692 5.66L18.2492 5.78L18.3192 5.81L18.3892 5.77L18.4092 5.79L18.2692 5.86L18.2492 5.84L18.2192 5.88V5.84L18.1992 5.86L18.1092 5.84L18.0592 5.79L18.0792 5.74L18.0292 5.72L17.9792 5.74L17.9092 5.99L17.9992 6.01L18.0692 5.94L18.0492 5.95ZM22.0192 1.69V1.73L22.0592 1.76L22.1092 1.78L22.1292 1.76V1.72L22.1092 1.7L22.0192 1.68V1.69ZM21.1892 2.55V2.9L21.2492 2.95L21.4792 2.82L21.4592 2.73L21.2092 2.52L21.1892 2.54V2.55ZM21.5892 2.35L21.3592 2.44L21.3292 2.58L21.4192 2.49L21.5292 2.59L21.6692 2.62L21.5992 2.34L21.5892 2.35ZM20.3092 3.78L20.2192 3.73L20.0492 3.84L20.0692 3.89L20.1392 3.92L20.2992 3.83L20.3192 3.78H20.3092ZM22.3392 1.55L22.3592 1.6L22.4492 1.58L22.5392 1.49L22.6092 1.52L22.6992 1.5L22.4992 1.38L22.3392 1.54V1.55ZM18.6292 5.51L18.7492 5.49L18.6992 5.4L18.6292 5.37V5.51ZM22.1392 2.05L22.0892 1.96H21.9792V2L22.0692 2.12L22.1392 2.05ZM17.5492 6.73L17.6692 6.57L17.5792 6.55L17.5592 6.57H17.5192L17.4292 6.62L17.4492 6.71L17.5392 6.73H17.5492ZM22.3592 1.93L22.3892 1.89L22.2992 1.8H22.1892L22.2292 1.91L22.3492 1.96V1.92L22.3592 1.93ZM21.8692 2.15L21.8192 2.2V2.27L21.9592 2.13L21.8692 2.15ZM17.9992 6.31L18.0192 6.15L17.8092 6.33L17.8492 6.4H17.9192L18.0092 6.31H17.9992ZM16.5192 7.79L16.4992 7.7H16.4592L16.4292 7.77L16.4792 7.82L16.5092 7.78L16.5192 7.79ZM21.8192 2.31L21.6992 2.47L21.8692 2.36L21.8192 2.31ZM18.5392 5.93L18.7492 5.82L18.8192 5.68L18.7092 5.61L18.5692 5.72L18.5392 5.93ZM21.4992 3.25L21.4592 3.18L21.3692 3.16L21.3292 3.13H21.2892L21.2692 3.04L21.1792 3.06L21.1592 3.15L21.4292 3.3L21.4792 3.25H21.4992ZM20.5192 3.97L20.4292 3.99L20.3792 4.04L20.3092 4.01L20.2392 4.05L20.1692 4.23L20.2392 4.26L20.3092 4.19L20.5792 4.34L20.5592 4.01L20.6092 3.99V3.92L20.5592 3.9L20.5292 3.97H20.5192ZM17.0592 7.52L17.0392 7.43L16.8992 7.47L16.8692 7.54L16.8892 7.59H16.9592L17.0592 7.52ZM19.4492 4.92L19.5192 5.06L19.4492 5.1L19.2892 5.08L19.4492 4.92ZM22.1992 2.21V2.25L22.0292 2.32L21.9992 2.53L22.3992 2.15L22.2092 2.21H22.1992ZM17.4892 7.01L17.6092 7.13H17.6792L17.8192 7.27L18.4792 6.7L18.5092 6.52L18.0792 7H17.9692L17.8792 6.91L17.9292 6.82L17.7892 6.72L17.4792 7.01H17.4892ZM18.1692 6.35L18.1892 6.4L18.2792 6.38L18.2992 6.33L18.2292 6.26L18.1792 6.35H18.1692ZM21.7492 2.74H21.7892L21.8592 2.67V2.63L21.8092 2.61L21.7392 2.68L21.7592 2.73L21.7492 2.74ZM21.6792 2.92L21.5692 2.85L21.5192 2.9V2.97L21.5692 2.99L21.6092 3.06L21.5392 3.27L21.5892 3.43H21.6292L21.6492 3.41L21.6792 2.92ZM21.2692 3.49L21.2492 3.44L21.1992 3.42L21.1292 3.46V3.5L21.1992 3.57H21.2392L21.2692 3.5V3.49ZM16.7492 8.02L16.8392 8.04L16.9592 7.92L16.9392 7.9H16.8992L16.8692 7.94L16.7492 7.96V8.03V8.02ZM22.6592 1.95L22.6392 2L22.6792 2.03H22.7492V1.96L22.7092 1.93L22.6892 1.95H22.6492H22.6592ZM22.8692 1.77L23.0292 1.79L23.1192 1.74V1.7L23.0792 1.67L22.8692 1.78V1.77ZM18.1492 6.7L18.2192 6.73V6.69L18.1692 6.6L18.1392 6.64L18.1592 6.69L18.1492 6.7ZM23.1992 1.47L23.1792 1.56H23.2492L23.2692 1.47H23.1992ZM16.8392 8V8.04L16.8192 8.02L16.8392 8ZM16.7592 8.27L16.7392 8.22L16.6992 8.19L16.6092 8.24L16.6592 8.29H16.7292L16.7492 8.27H16.7592ZM22.6592 2.17H22.5492L22.4792 2.24L22.6592 2.73L22.7392 2.25L22.6492 2.16L22.6592 2.17ZM17.6092 7.43L17.6292 7.38L17.6092 7.36H17.5392V7.4L17.5192 7.42L17.6092 7.44V7.43ZM19.9692 5.11L19.8292 5.18L19.9392 5.35L19.9592 5.37L20.0292 5.3L20.0592 4.84L19.9192 4.95L19.9692 5.11ZM21.9092 2.97L21.8192 3.02L21.9092 3.07L21.9992 3.02L21.9092 2.97ZM22.3492 2.74H22.1692L22.2892 2.83L22.4592 2.58L22.3392 2.6V2.74H22.3492ZM22.3092 3.81H22.2392L22.0592 3.67L22.0392 3.48L21.9292 3.34L21.9592 3.13L21.7292 3.19L21.7492 3.42H21.8592L21.9092 3.51L21.7492 3.67L21.7692 3.86L21.8592 3.91L21.9092 3.86L21.8692 3.79L21.9192 3.74H21.9892L22.2592 3.93L22.3492 3.88L22.5292 3.98L22.6992 3.63L22.2992 3.83L22.3092 3.81ZM17.5192 7.73L17.6592 7.69L17.6892 7.62L17.5792 7.55L17.5292 7.57L17.4792 7.66L17.5192 7.73ZM22.8492 2.22V2.29H22.8892L22.9092 2.31L22.9292 2.29V2.25L22.8592 2.22H22.8492ZM20.8792 5.1L21.0192 5.17L21.1092 5.29L21.2492 5.32L21.3392 5.27L21.3792 5.41H21.4192L21.4392 5.39V5.32L21.3892 5.23L21.4092 5.21L21.2492 5.16L21.2092 5.09H21.1392L21.1192 5.07L21.0992 5.09L20.9192 5.02L20.8492 4.92V4.71L20.6992 4.57L20.6492 4.66L20.6092 4.63H20.5692L20.5492 4.72H20.4792L20.4492 4.93L20.5692 4.98L20.6592 4.93L20.6392 4.88L20.6892 4.83L20.8292 5.11L20.6892 5.08L20.7792 5.24L20.8492 5.2L20.8692 5.11L20.8792 5.1ZM17.4192 8.02V7.98L17.3692 7.96L17.3192 8.01V8.05L17.4292 8.01L17.4192 8.02ZM22.5092 2.93L22.4192 2.88L22.1392 3.1L22.3192 3.2L22.4892 3.09V3.05L22.5092 3.03V2.92V2.93ZM18.6192 7L18.5092 6.86L18.2692 7.07L18.3392 7.1L18.4992 6.97L18.6192 6.99V7ZM18.9492 6.98L18.9092 6.77H18.6792L18.9092 7.02L18.9392 6.98H18.9492ZM19.9892 5.59L20.0092 5.47H19.9692L19.9192 5.56L19.9892 5.59ZM22.7892 2.65L22.7692 2.7L22.7892 2.75L22.8392 2.77L22.9392 2.7L22.9592 2.61L22.8692 2.59L22.7792 2.64L22.7892 2.65ZM19.6792 5.92L19.8192 5.95L19.9292 6.16L19.9792 6.18L20.0092 6.14L20.0592 6.23L20.1092 6.25L20.1792 6.46L20.4092 6.51L19.9392 5.95L20.0592 5.9L20.0792 5.92L20.3592 5.81L20.3092 5.97L20.5492 5.79V5.75L20.6692 5.7L20.1192 5.58L20.0092 5.48L20.0292 5.64L19.9992 5.68L19.9792 5.77L19.6492 5.93L19.6792 5.92ZM17.9292 7.69L17.9992 7.72L18.1592 7.63V7.49L18.0492 7.63H17.9792L17.9292 7.68V7.69ZM21.0392 4.57L21.0792 4.64L21.1192 4.67L21.2092 4.58L21.1692 4.51L21.0792 4.49L21.0492 4.56L21.0392 4.57ZM22.7292 3.01L22.6392 2.96H22.5992L22.5692 3V3.26V3.28H22.6092L22.7292 3.01ZM17.2192 8.67L17.2392 8.62L17.2192 8.6L17.1292 8.58V8.65L17.2192 8.67ZM22.5892 3.51L22.6192 3.4L22.4792 3.37L22.2192 3.46L22.2592 3.57L22.4392 3.64L22.5992 3.51H22.5892ZM20.2792 5.53L20.3692 5.51L20.4192 5.46L20.3692 5.41L20.2792 5.46V5.53ZM18.6792 7.28V7.24L18.6592 7.22L18.5692 7.2L18.5192 7.25L18.5892 7.28L18.6792 7.26V7.28ZM23.0892 2.75L23.0592 2.82L23.1292 2.89L23.1592 2.85L23.1792 2.73L23.0892 2.75ZM21.5592 4.36L21.5392 4.38V4.34L21.5592 4.36ZM22.0292 4.02L22.0492 4L21.9992 3.98L21.9092 4.07L22.0292 4.05V4.01V4.02ZM18.4992 7.61L18.4092 7.66L18.4792 7.73L18.6192 7.76L18.7592 7.65L18.5092 7.69L18.4892 7.6L18.4992 7.61ZM17.9092 8.57V8.46L17.8492 8.37L17.7392 8.34L17.6892 8.43L17.7392 8.48H17.8092L17.8992 8.57H17.9092ZM19.2592 7.07L19.1892 7H19.1192L19.0692 7.05H19.2592V7.07ZM18.8892 7.32L18.7992 7.37L18.7692 7.44L18.7892 7.46H18.8292L18.8792 7.41L18.8992 7.32H18.8892ZM21.4092 5.05L21.3892 5.07L21.3692 5.05H21.4092ZM20.6692 6.35L20.7892 6.19L20.5092 5.98V6.12L20.6692 6.14L20.6892 6.16V6.35H20.6692ZM17.7292 9.17L17.7492 9.12L17.7092 9.05L17.6892 9L17.6592 9.04V9.18H17.7292V9.17ZM21.0592 5.71L21.0092 5.69L20.9392 5.73L20.9192 5.78L20.9592 5.89L21.3092 5.92V5.88L21.0592 5.71ZM21.0592 6.41L21.1792 6.18L21.0392 5.94H20.8992L20.8292 6.05L21.0292 6.24L21.0692 6.42L21.0592 6.41ZM20.3092 6.9L20.2692 6.79L20.1792 6.7L20.0892 6.75L20.2992 6.89L20.3092 6.9ZM20.4192 7.36L20.3492 7.26L20.4892 7.12L20.5192 6.98L20.1692 7.06V7.13L20.2392 7.2L20.2792 7.34L20.4192 7.37V7.36ZM20.6192 6.79L20.5492 6.72L20.4592 6.77L20.5492 6.86H20.6192V6.79ZM21.4292 5.85L21.4892 6.32L21.6092 6.3L21.7092 6.09L21.5692 5.88L21.4292 5.85ZM21.9892 6.88L22.0192 6.77L21.9792 6.7L21.8892 6.72L21.8192 6.69L22.0392 6.28L21.9992 6.17L22.1392 5.96L21.7092 5.72L21.7492 5.9L21.8392 5.99L21.9292 6.32L21.3192 6.66L21.0892 6.61L21.1492 6.91L21.4292 6.87L21.4092 6.75L21.5492 6.68L21.7092 6.91L21.9692 6.89L21.9892 6.88ZM21.0192 6.66L20.9992 6.57H20.9292L20.8992 6.68L20.9492 6.77L21.0192 6.66ZM21.4292 7.06V6.99L21.2892 6.96L21.1492 7.03L20.8092 6.95L20.7592 7L20.7992 7.14H20.8692L21.0092 7.03L21.0792 7.1L21.4292 7.06ZM20.8692 7.49L20.8292 7.28L20.7192 7.21H20.6092L20.5792 7.32L20.5592 7.3L20.4592 7.41L20.3692 7.43L20.3392 7.5L20.3892 7.55H20.8092L20.8592 7.49H20.8692ZM21.2592 7.38V7.2H21.2192L21.1292 7.25L21.1092 7.34L21.0792 7.38V7.42L20.9792 7.46V7.57L21.0692 7.59L21.1192 7.5H21.1592L21.2592 7.39V7.38ZM22.2192 6.72L22.1992 6.6L22.1292 6.57L22.1092 6.62L22.1292 6.67L22.2192 6.72ZM21.4392 7.52L21.4192 7.57L21.4592 7.64L21.5092 7.66L21.5992 7.57L21.5792 7.52L21.5092 7.49L21.4392 7.53V7.52ZM21.6292 8.26L21.6592 8.19L21.5892 8.09L21.7792 7.79H21.3892L21.3492 7.73H21.2792L21.2492 7.8L21.3392 7.85L21.3592 7.94L21.4292 8.01L21.3592 8.12L21.4092 8.21L21.6192 8.28L21.6292 8.26ZM22.1192 6.9L22.1392 6.95L22.2092 6.98L22.2992 6.96L22.3492 6.91L22.2292 6.82L22.1292 6.89L22.1192 6.9ZM22.0292 8.13L22.0492 8.08L22.0292 8.03L21.9592 8L21.8592 8.07L21.8792 8.12L21.9492 8.15L22.0392 8.13H22.0292ZM22.7892 8L22.6792 7.86L22.5392 7.9L22.1092 8.31V8.42L22.1592 8.47L22.5792 8.01L22.6892 8.04L22.7992 8H22.7892ZM23.1192 7.7L23.1392 7.61L23.0292 7.51L22.9392 7.53L22.9192 7.62L22.9692 7.71L23.0392 7.74L23.1092 7.7H23.1192ZM22.9192 8.65L22.8092 8.44V8.23L22.6492 8.46L22.8492 8.69L22.9192 8.65ZM22.4492 8.92V8.88L22.4092 8.85L22.3192 8.9L22.3392 8.95L22.3892 8.97L22.4392 8.92H22.4492ZM23.3192 8.27L23.3692 8.25V8.21L23.3492 8.19L23.2992 8.17L23.2292 8.21L23.3192 8.26V8.27ZM22.6292 9.34L22.5892 9.23L22.4692 9.18L22.5792 9.35H22.6192L22.6392 9.33L22.6292 9.34ZM23.8792 7.91L23.8492 7.98L23.8892 8.09L23.9392 8.07L23.9592 8.02V7.95L23.9192 7.92H23.8792V7.91ZM23.0692 9.07L23.1192 8.98L23.0992 8.93H23.0592L23.0092 9.02L23.0292 9.07H23.0692Z"
            fill="#FF0000"
        />
        <path d="M26.9008 22.14V23.71H11.8008V22.14H26.9008Z" fill="white" />
        <path
            d="M38.12 19.71V17.11C37.07 18.66 35.55 19.98 33.17 19.98C30.07 19.98 27 17.53 27 13.26C27 8.99002 30.07 6.51002 33.17 6.51002C35.57 6.51002 37.12 7.81002 38.12 9.26002V1.46002H40.04V19.71H38.12ZM33.52 8.24002C31.02 8.24002 28.97 10.09 28.97 13.24C28.97 16.39 31.07 18.26 33.52 18.26C35.97 18.26 38.19 16.26 38.19 13.24C38.19 10.22 35.92 8.24002 33.52 8.24002Z"
            fill="white"
        />
        <path
            d="M49.0008 20.01C45.1308 20.01 42.3008 16.96 42.3008 13.29C42.3008 9.62002 45.1508 6.52002 49.0508 6.52002C52.9508 6.52002 55.7708 9.57002 55.7708 13.24C55.7708 16.91 52.9008 20.01 49.0008 20.01ZM49.0008 8.21002C46.2008 8.21002 44.2808 10.43 44.2808 13.23C44.2808 16.03 46.3308 18.28 49.0508 18.28C51.7708 18.28 53.8008 16.06 53.8008 13.28C53.8008 10.5 51.7308 8.21002 49.0008 8.21002Z"
            fill="white"
        />
        <path
            d="M63.8212 20.01C60.0512 20.01 57.2012 16.94 57.2012 13.29C57.2012 9.64002 60.0512 6.52002 63.8212 6.52002C66.2712 6.52002 67.7912 7.54002 68.9912 8.82002L67.7212 10.17C66.7012 9.10002 65.5512 8.22002 63.8012 8.22002C61.1812 8.22002 59.1812 10.44 59.1812 13.24C59.1812 16.04 61.2312 18.29 63.9312 18.29C65.5812 18.29 66.8512 17.47 67.8812 16.37L69.1012 17.52C67.8012 18.97 66.2512 20.02 63.8312 20.02L63.8212 20.01Z"
            fill="white"
        />
        <path
            d="M75.3012 19.96C73.4512 19.96 71.4012 19.23 69.9512 18.06L70.9212 16.68C72.3212 17.73 73.8712 18.33 75.3912 18.33C76.9112 18.33 78.0612 17.53 78.0612 16.28V16.23C78.0612 14.93 76.5412 14.43 74.8412 13.96C72.8212 13.39 70.5712 12.69 70.5712 10.31V10.26C70.5712 8.04003 72.4212 6.56003 74.9712 6.56003C76.5412 6.56003 78.2912 7.11003 79.6212 7.98003L78.7412 9.43003C77.5412 8.66003 76.1712 8.18003 74.9212 8.18003C73.4012 8.18003 72.4212 8.98003 72.4212 10.05V10.1C72.4212 11.32 74.0212 11.8 75.7412 12.32C77.7412 12.92 79.8912 13.69 79.8912 16.02V16.07C79.8912 18.52 77.8712 19.94 75.2912 19.94L75.3012 19.96Z"
            fill="white"
        />
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
    darkMode: false,
    nextThemes: {
        defaultTheme: 'dark',
    },
    feedbackLabels: 'feedback',
    logo: () => <Logo height={56} />,
    head: ({ title, meta }) => {
        const ogImage = meta.image || 'https://docs.beets.fi/doxMatrix1.5x.png';

        return (
            <>
                {/* Favicons, meta */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#000000" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />

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
                <meta name="og:title" content={title ? title + ' – Beethoven X Docs' : 'Beethoven X - Docs'} />
                <meta name="og:image" content={ogImage} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@beethoven_x" />
                <meta name="twitter:image" content={ogImage} />
                <meta property="twitter:domain" content="docs.beets.fi" />
                <meta property="twitter:url" content="https://docs.beets.fi" />
                <meta name="twitter:title" content={title ? title + ' – Beethoven X Docs' : 'Beethoven X - Docs'} />
                <meta
                    name="twitter:description"
                    content="Innovation meets imagination. Beethoven X is a next generation decentralized investment platform built for the future of finance. Leveraging the most advanced technology in the industry, we provide innovative, capital-efficient, and sustainable solutions for all DeFi users."
                />

                <meta name="apple-mobile-web-app-title" content="Beethoven X Docs" />
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
        return null;

        /*switch (locale) {
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
        }*/
    },
    /*i18n: [
        { locale: 'en-US', text: 'English' },
        { locale: '', text: 'More coming soon...' },
        { locale: 'es-ES', text: 'Español' },
        { locale: 'zh-CN', text: '简体中文' },
        { locale: 'pt-BR', text: 'Português Brasileiro' },
        { locale: 'ja', text: '日本語' },
        { locale: 'ko', text: '한국어' },
        { locale: 'ru', text: 'Русский' },
    ],*/
};
