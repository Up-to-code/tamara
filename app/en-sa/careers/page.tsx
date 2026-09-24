import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-careers-header.html';
import body from '@/components/exact/en-sa-careers-body.html';
import footer from '@/components/exact/en-sa-careers-footer.html';
import inline from '@/components/exact/en-sa-careers.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
