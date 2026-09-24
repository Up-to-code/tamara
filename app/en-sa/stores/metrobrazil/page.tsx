import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-metrobrazil-header.html';
import body from '@/components/exact/en-sa-stores-metrobrazil-body.html';
import footer from '@/components/exact/en-sa-stores-metrobrazil-footer.html';
import inline from '@/components/exact/en-sa-stores-metrobrazil.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
