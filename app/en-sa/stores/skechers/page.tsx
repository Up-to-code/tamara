import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-skechers-header.html';
import body from '@/components/exact/en-sa-stores-skechers-body.html';
import footer from '@/components/exact/en-sa-stores-skechers-footer.html';
import inline from '@/components/exact/en-sa-stores-skechers.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
