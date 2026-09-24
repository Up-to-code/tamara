import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-maje-header.html';
import body from '@/components/exact/en-sa-stores-maje-body.html';
import footer from '@/components/exact/en-sa-stores-maje-footer.html';
import inline from '@/components/exact/en-sa-stores-maje.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
