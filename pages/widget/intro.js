import data from '../data/home.json';
import Image from 'next/image';
import Mr from '../img/mrrestopos.svg';

function Intro() {
  return (
    <div className="row">
      <div className="col-md-4 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.intro}</a>
          </strong>
        </h3>
        <p className="lead">{data.content}</p>
        <p>
          <a href={data.cataloglink} className="btn btn-dark col-12">
            {data.catalog}{' '}
          </a>
          <a
            href={data.androidlink}
            className="btn btn-outline-dark col-12 mt-1"
          >
            {data.android}{' '}
          </a>
        </p>
      </div>
      <div className="col-md-8 p-0">
        <Image
          src={Mr}
          alt={data.title}
          className="img-fluid"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Intro;
