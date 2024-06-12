export default function capitalize(str:string) {
    if (typeof str !== 'string' || str.length === 0) return str

    return str
        .split(' ')
        .map(word => {
            if(word.length < 2) return word 

            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        })
        .join(' ')
}