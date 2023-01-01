import data from '../data/home.json';
import Image from 'next/image';
import Qrcode from '../img/qrcode.svg';

function Qr() {
  return (
    <div className="row">
      <div className="col-md-4 p-3">
        <Image
          src={Qrcode}
          alt={data.qrcode}
          className="img-fluid"
          width="50%"
          height="50%"
        />
      </div>
      <div className="col-md-8 p-3 p-md-5">
        <h3>
          <strong>
            <a href="/">{data.qrcode}</a>
          </strong>
        </h3>
        <p>{data.qrcodetxt}</p>
      </div>
    </div>
  );
}

export default Qr;
