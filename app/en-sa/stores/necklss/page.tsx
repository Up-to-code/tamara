import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-necklss-header.html';
import body from '@/components/exact/en-sa-stores-necklss-body.html';
import footer from '@/components/exact/en-sa-stores-necklss-footer.html';
import inline from '@/components/exact/en-sa-stores-necklss.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
