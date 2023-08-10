import './App.css';
import Accordion from './Accordion';

const facts = [
  {
    title: 'Hypertext Markup Language',
    details:
      'Hypertext Markup Language(HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.',
  },
  {
    title: 'Cascading Style Sheets',
    details:
      'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document writen in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.',
  },
  {
    title: 'Javascript',
    details:
      'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.',
  },
];

function App() {
  return <Accordion facts={facts} />;
}

export default App;
export { facts };
