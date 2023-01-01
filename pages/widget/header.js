import Link from 'next/link';
import data from '../data/widget.json';
function Nav() {
  return (
    <div className="col-md-12 p-3 p-md-5 text-center">
      <h1>
        <strong>
          <a href="/">{data.title}</a>
        </strong>
      </h1>
      <h2>{data.desc}</h2>
      <nav className="navbar p-1 col-md-8 offset-md-2 bg-white">
        <Link className="nav-link  p-1" href={data.url1}>
          {data.menu1}
        </Link>
        <Link className="nav-link  p-1" href={data.url2}>
          {data.menu2}
        </Link>
        <Link className="nav-link  p-1" href={data.url3}>
          {data.menu3}
        </Link>
        <a
          className="nav-link  p-1"
          href={data.url4}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.menu4}
        </a>
      </nav>
    </div>
  );
}

export default Nav;
