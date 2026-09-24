import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-musk-header.html';
import body from '@/components/exact/en-sa-stores-musk-body.html';
import footer from '@/components/exact/en-sa-stores-musk-footer.html';
import inline from '@/components/exact/en-sa-stores-musk.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
