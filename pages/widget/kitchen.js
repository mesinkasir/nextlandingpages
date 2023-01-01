import data from '../data/home.json';
import Image from 'next/image';
import Koki from '../img/kitchen.svg';

function Kitchen() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Koki}
          alt={data.kitchen}
          className="img-fluid"
          loading="lazy"
          width="100%"
          height="100%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.kitchen}</a>
          </strong>
        </h3>
        <p>{data.kitchentxt}</p>
      </div>
    </div>
  );
}

export default Kitchen;
