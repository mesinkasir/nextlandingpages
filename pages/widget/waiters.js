import data from '../data/home.json';
import Image from 'next/image';
import Mobile from '../img/waiters.svg';

function Waiter() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Mobile}
          alt={data.waiters}
          className="img-fluid"
          width="50%"
          height="50%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.waiters}</a>
          </strong>
        </h3>
        <p>{data.waiterstxt}</p>
      </div>
    </div>
  );
}

export default Waiter;
