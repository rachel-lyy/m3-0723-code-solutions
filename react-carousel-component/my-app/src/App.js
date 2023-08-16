import './App.css';
import Slide from './Slide';

const images = [
  {
    id: 0,
    src: '/images/dog-1.jpg',
    name: 'Champion',
  },
  {
    id: 1,
    src: '/images/dog-2.jpg',
    name: 'Beach Bae Pup',
  },
  {
    id: 2,
    src: '/images/dog-3.jpg',
    name: 'Just a little baby (dog)',
  },
];

function App() {
  return <Slide images={images} />;
}

export default App;
