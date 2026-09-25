import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-careers-builders-header.html';
import body from '@/components/exact/en-sa-careers-builders-body.html';
import footer from '@/components/exact/en-sa-careers-builders-footer.html';
import inline from '@/components/exact/en-sa-careers-builders.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
