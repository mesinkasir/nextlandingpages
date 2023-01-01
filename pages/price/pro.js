import data from '../data/price.json';
import Image from 'next/image';
import Qr from '../img/qrcode.svg';

function Pro() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Qr}
          alt={data.pro}
          className="img-fluid"
          width="50%"
          loading="lazy"
          height="50%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <div className="p-3 p-md-5 bg-light rounded shadow-sm">
          <h3>
            <strong>
              <a href="/order">{data.pro}</a>
            </strong>
          </h3>
          <p>{data.prodesc}</p>
          <p>
            <strong>{data.proprice}</strong>
          </p>
          <p>
            <a href={data.prolink} class="btn btn-dark">
              Order {data.pro}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pro;
