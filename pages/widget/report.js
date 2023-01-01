import data from '../data/home.json';
import Image from 'next/image';
import Rep from '../img/laporan.svg';

function Laporan() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Rep}
          alt={data.admin}
          className="img-fluid"
          width="50%"
          height="50%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.admin}</a>
          </strong>
        </h3>
        <p>{data.admintxt}</p>
      </div>
    </div>
  );
}

export default Laporan;
