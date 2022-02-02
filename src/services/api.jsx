// const KEY = '24368394-ccc0003f8191eae78e1f7d910';
// const BaseUrl = 'https://pixabay.com/api/';
// export const getImages = (search, page) => {
//   return fetch(
//     `${BaseUrl}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
//   )
//     .then(res => res.json())
//     .then(data => data.hits);
// };
import { toast } from 'react-toastify';
const KEY = '24368394-ccc0003f8191eae78e1f7d910';
const BaseUrl = 'https://pixabay.com/api/';

export function fetchImages(search, page = 1, onLoading) {
  return fetch(
    `${BaseUrl}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(res => {
    if (res.ok) {
      return res.json();
    }
    onLoading(false);
    return Promise.reject(new Error(toast.error('Something went wrong')));
  });
}
