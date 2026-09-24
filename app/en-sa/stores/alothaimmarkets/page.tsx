import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-alothaimmarkets-header.html';
import body from '@/components/exact/en-sa-stores-alothaimmarkets-body.html';
import footer from '@/components/exact/en-sa-stores-alothaimmarkets-footer.html';
import inline from '@/components/exact/en-sa-stores-alothaimmarkets.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
