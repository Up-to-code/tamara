import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-my-table-header.html';
import body from '@/components/exact/en-sa-stores-my-table-body.html';
import footer from '@/components/exact/en-sa-stores-my-table-footer.html';
import inline from '@/components/exact/en-sa-stores-my-table.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
