const KEY = '24368394-ccc0003f8191eae78e1f7d910';
const BaseUrl = 'https://pixabay.com/api/';

//   https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

const getImages = (pictureTag, page) => {
  return fetch(
    `${BaseUrl}?q=${pictureTag}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};
export default getImages;
