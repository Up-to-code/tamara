import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-mokab-header.html';
import body from '@/components/exact/en-sa-stores-mokab-body.html';
import footer from '@/components/exact/en-sa-stores-mokab-footer.html';
import inline from '@/components/exact/en-sa-stores-mokab.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
