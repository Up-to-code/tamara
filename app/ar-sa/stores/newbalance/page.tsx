import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-newbalance-header.html';
import body from '@/components/exact/ar-sa-stores-newbalance-body.html';
import footer from '@/components/exact/ar-sa-stores-newbalance-footer.html';
import inline from '@/components/exact/ar-sa-stores-newbalance.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
