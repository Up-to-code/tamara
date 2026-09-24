import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-jds-header.html';
import body from '@/components/exact/en-sa-stores-jds-body.html';
import footer from '@/components/exact/en-sa-stores-jds-footer.html';
import inline from '@/components/exact/en-sa-stores-jds.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
