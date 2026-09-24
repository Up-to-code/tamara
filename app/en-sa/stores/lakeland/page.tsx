import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-lakeland-header.html';
import body from '@/components/exact/en-sa-stores-lakeland-body.html';
import footer from '@/components/exact/en-sa-stores-lakeland-footer.html';
import inline from '@/components/exact/en-sa-stores-lakeland.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
