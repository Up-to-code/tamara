import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-namshi-header.html';
import body from '@/components/exact/en-sa-stores-namshi-body.html';
import footer from '@/components/exact/en-sa-stores-namshi-footer.html';
import inline from '@/components/exact/en-sa-stores-namshi.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
