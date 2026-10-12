
const imageUrl = ({ photo, width, height, sat = 0, sepia = 0 }) =>
  `https://images.unsplash.com/${photo}?w=${width}&h=${height}&fit=crop&auto=format&sat=${sat}&sepia=${sepia}`



export default imageUrl

