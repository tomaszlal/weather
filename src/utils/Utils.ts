export class Utils {

    public static formatAndRound(value: number): string {
        const roundedString = value.toFixed(2);
        const parts = roundedString.split('.');
        let integerPart = parts[0];
        const decimalPart = parts[1];
        const isNegative = integerPart.startsWith('-');
        if (isNegative) {
            integerPart = integerPart.substring(1);
        }
        const paddedIntegerPart = integerPart.padStart(3, ' ');
        const finalIntegerPart = isNegative ? '-' + paddedIntegerPart.substring(1) : paddedIntegerPart;
        return `${finalIntegerPart}.${decimalPart}`;
    }
}