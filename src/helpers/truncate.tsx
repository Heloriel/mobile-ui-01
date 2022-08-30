export function truncate(str: string, n: number = 50){
    return str.length > n ? str.slice(0, n - 1) + " ..." : str;
}