import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-miniso-header.html';
import body from '@/components/exact/en-sa-stores-miniso-body.html';
import footer from '@/components/exact/en-sa-stores-miniso-footer.html';
import inline from '@/components/exact/en-sa-stores-miniso.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
