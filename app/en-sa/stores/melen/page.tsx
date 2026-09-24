import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-melen-header.html';
import body from '@/components/exact/en-sa-stores-melen-body.html';
import footer from '@/components/exact/en-sa-stores-melen-footer.html';
import inline from '@/components/exact/en-sa-stores-melen.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
