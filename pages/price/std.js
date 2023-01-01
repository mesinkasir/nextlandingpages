import data from '../data/price.json';
import Image from 'next/image';
import Andro from '../img/androidapp.svg';

function Pro() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Andro}
          alt={data.std}
          className="img-fluid"
          width="50%"
          height="50%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <div className="p-3 p-md-5 bg-light rounded shadow-sm">
          <h3>
            <strong>
              <a href="/order">{data.std}</a>
            </strong>
          </h3>
          <p>{data.stddesc}</p>
          <p>
            <strong>{data.stdprice}</strong>
          </p>
          <p>
            <a href={data.stdlink} class="btn btn-dark">
              Order {data.std}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pro;
