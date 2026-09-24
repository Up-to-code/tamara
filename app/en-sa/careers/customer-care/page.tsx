import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-careers-customer-care-header.html';
import body from '@/components/exact/en-sa-careers-customer-care-body.html';
import footer from '@/components/exact/en-sa-careers-customer-care-footer.html';
import inline from '@/components/exact/en-sa-careers-customer-care.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
