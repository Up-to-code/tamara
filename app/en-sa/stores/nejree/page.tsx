import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-nejree-header.html';
import body from '@/components/exact/en-sa-stores-nejree-body.html';
import footer from '@/components/exact/en-sa-stores-nejree-footer.html';
import inline from '@/components/exact/en-sa-stores-nejree.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
