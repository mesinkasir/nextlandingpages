import data from '../data/widget.json';
import Link from 'next/link';

function Footer() {
  return (
    <div className="row">
      <div className="col-md-6 p-3 p-md-5 text-center mt-5">
        <h3 className="display-4">
          <strong>
            <a href="/">{data.title}</a>
          </strong>
        </h3>
      </div>
      <div className="col-md-3 col-6 p-3 p-md-5 text-center mt-5">
        <p>Menu</p>
        <p className="row text-center">
          <Link className="col-md-3" href={data.url1}>
            {data.menu1}
          </Link>
          <Link className="col-md-3" href={data.url2}>
            {data.menu2}
          </Link>
          <Link className="col-md-3" href={data.url3}>
            {data.menu3}
          </Link>
          <a
            className="col-md-3"
            href={data.url4}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.menu4}
          </a>
        </p>
      </div>
      <div className="col-md-3 col-6 p-3 p-md-5 text-center mt-5">
        <p>Contact</p>
        <p className="row text-center">
          <a className="col-md-3" href={data.phone}>
            Chat
          </a>
          <a className="col-md-3" href={data.chat}>
            Call
          </a>
          <a className="col-md-3" href={data.mail}>
            Email
          </a>
          <a
            className="col-md-3"
            href={data.address}
            target="_blank"
            rel="noopener noreferrer"
          >
            Maps
          </a>
        </p>
      </div>
      <footer className="col-md-12 p-1 text-center">
        <p>
          <small>
            Powered by&nbsp;
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next
            </a>
            &nbsp;
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            &nbsp;
            <a
              href="https://github.com/mesinkasir/nextlandingpages"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            &nbsp;Developer&nbsp;
            <a
              href="https://www.fiverr.com/creativitas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Crerativitas
            </a>
          </small>
        </p>
      </footer>
    </div>
  );
}

export default Footer;
