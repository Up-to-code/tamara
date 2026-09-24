import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-yaqoot-header.html';
import body from '@/components/exact/en-sa-stores-yaqoot-body.html';
import footer from '@/components/exact/en-sa-stores-yaqoot-footer.html';
import inline from '@/components/exact/en-sa-stores-yaqoot.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
