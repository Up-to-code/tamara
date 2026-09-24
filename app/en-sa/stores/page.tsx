import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-header.html';
import body from '@/components/exact/en-sa-stores-body.html';
import footer from '@/components/exact/en-sa-stores-footer.html';
import inline from '@/components/exact/en-sa-stores.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
