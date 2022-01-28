// import axios from 'axios';
const KEY = '24368394-ccc0003f8191eae78e1f7d910';
const BaseUrl = 'https://pixabay.com/api/';
export const getImages = (search, page) => {
  return fetch(
    `${BaseUrl}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};

// export const getImages = async (search, page) => {
//   const fetchImages = await axios.get(
//     `${BaseUrl}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//   )
//   return fetchImages;
// };
