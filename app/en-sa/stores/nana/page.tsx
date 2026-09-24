import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-nana-header.html';
import body from '@/components/exact/en-sa-stores-nana-body.html';
import footer from '@/components/exact/en-sa-stores-nana-footer.html';
import inline from '@/components/exact/en-sa-stores-nana.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
