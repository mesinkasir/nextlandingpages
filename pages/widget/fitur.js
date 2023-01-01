import Waiters from '../widget/waiters';
import Kasir from '../widget/kasir';
import Kitchen from '../widget/kitchen';
import Report from '../widget/report';
import Webs from '../widget/website';
import Andro from '../widget/android';
import Qr from '../widget/qrcode';

function Fitur() {
  return (
    <>
      <Waiters />
      <Kitchen />
      <Kasir />
      <Report />
      <Webs />
      <Qr />
      <Andro />
    </>
  );
}

export default Fitur;
