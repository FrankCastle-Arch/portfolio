import imageUrl from './imageUrl.js'

const heroPhoto = ({ photo, width, height, sat, description, sepia }) => {
  const src = imageUrl({ photo, width, height, sat, sepia })
  const alt = description
  return [src, alt]
}


export default heroPhoto


