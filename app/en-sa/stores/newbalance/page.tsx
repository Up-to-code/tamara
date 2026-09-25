import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-stores-newbalance-header.html';
import body from '@/components/exact/en-sa-stores-newbalance-body.html';
import footer from '@/components/exact/en-sa-stores-newbalance-footer.html';
import inline from '@/components/exact/en-sa-stores-newbalance.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
