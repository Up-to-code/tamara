import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-ikea-header.html';
import body from '@/components/exact/en-sa-stores-ikea-body.html';
import footer from '@/components/exact/en-sa-stores-ikea-footer.html';
import inline from '@/components/exact/en-sa-stores-ikea.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
