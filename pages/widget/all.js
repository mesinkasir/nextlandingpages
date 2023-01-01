import data from '../data/home.json';

function All() {
  return (
    <div className="row">
      <div className="col-md-12 p-3 p-md-5">
        <div className="bg-dark p-3 p-md-5 text-center rounded text-white shadow-sm">
          <h3>
            <strong>
              <a href="/" className="text-white">
                {data.all}
              </a>
            </strong>
          </h3>
          <p>{data.alltxt}</p>
          <p>
            <a
              href={data.allurl1}
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.allbtn1}
            </a>{' '}
            <a
              href={data.allurl2}
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.allbtn2}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default All;
