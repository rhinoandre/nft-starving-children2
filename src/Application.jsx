import Nullstack from 'nullstack';
import '../tailwind.css';
import Home from './Home';

class Application extends Nullstack {
  nftChildren;

  prepare({ page }) {
    page.locale = 'en-US';
  }

  renderHead() {
    return (
      <head>
        <link
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <body class="bg-gray-900 text-white font-roboto">
        <Head />
        <Home route="/" greeting="Welcome to Nullstack!" />
      </body>
    )
  }

}

export default Application;