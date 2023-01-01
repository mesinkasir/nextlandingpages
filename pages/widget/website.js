import data from '../data/home.json';
import Image from 'next/image';
import Webs from '../img/website.svg';

function Web() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Webs}
          alt={data.website}
          className="img-fluid"
          width="50%"
          height="50%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.website}</a>
          </strong>
        </h3>
        <p>{data.websitetxt}</p>
      </div>
    </div>
  );
}

export default Web;
