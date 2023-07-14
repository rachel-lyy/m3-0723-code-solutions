/* eslint-disable no-unused-vars */

// import from a file located at the absolute path `/foo/bar/baz/qux.js`:
// eslint-disable-next-line import/no-absolute-path
import '/foo/bar/baz/qux.js';

// import from a file named `foo.json` located in the current directory:
import 'foo';

// import from a file named `bar.js` located in the parent directory:
import '../bar';

// import from a file named `index.js` located in a directory named `baz` that
// is in the current directory:
import './baz/index';

// import from a file named `index.js` located in a directory named `baz` that
// is in the parent directory:
import '../baz/index';

// import from an `npm` module named `react`:
import npm from 'react';
