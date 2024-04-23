// export function Slug(urlName) {
//   // Convert to lowercase and remove leading/trailing spaces
//   urlName = urlName.trim().toLowerCase()

//   // Normalize Arabic characters (optional)
//   urlName = urlName
//     .normalize('NFD')
//     .replace(/[\u0600-\u06FF]/g, function (char) {
//       return String.fromCharCode(char.charCodeAt(0) - 1584)
//     })

//   // Replace non-alphanumeric characters with dashes
//   const slug = urlName.replace(/[^a-z0-9]+/g, '-')

//   // Remove multiple consecutive dashes
//   let finalSlug = slug.replace(/--+/g, '-')

//   // Check if the slug is already in use and make it unique
//   let counter = 2
//   let tempSlug = finalSlug
//   //   while (/* Check if tempSlug is already in use */) {
//   //     tempSlug = `${finalSlug}-${counter}`
//   //     counter++
//   //   }

//   return tempSlug
// }

export function Slug(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\u0621-\u064A0-9-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}
