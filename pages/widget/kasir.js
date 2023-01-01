import data from '../data/home.json';
import Image from 'next/image';
import Pos from '../img/kasir.svg';

function Kasir() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Pos}
          alt={data.kasir}
          className="img-fluid"
          width="100%"
          height="100%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.kasir}</a>
          </strong>
        </h3>
        <p>{data.kasirtxt}</p>
      </div>
    </div>
  );
}

export default Kasir;
