export function unslugify(slug:string) {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, function(match) {
        return match.toUpperCase()
    })
}