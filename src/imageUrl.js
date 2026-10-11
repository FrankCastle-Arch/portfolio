const imageUrl = ({ photo, width, height, sat = 0}) => 
  "https://images.unsplash.com/" + photo + "?w=" + height + "&fit=crop&auto=format&sat" + sat




export default imageUrl

