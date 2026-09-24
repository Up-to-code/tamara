import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-michaelkors-header.html';
import body from '@/components/exact/en-sa-stores-michaelkors-body.html';
import footer from '@/components/exact/en-sa-stores-michaelkors-footer.html';
import inline from '@/components/exact/en-sa-stores-michaelkors.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
