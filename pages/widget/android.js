import data from '../data/home.json';
import Image from 'next/image';
import Andro from '../img/androidapp.svg';

function Android() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Andro}
          alt={data.andro}
          className="img-fluid"
          width="50%"
          height="50%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.andro}</a>
          </strong>
        </h3>
        <p>{data.androtxt}</p>
      </div>
    </div>
  );
}

export default Android;
