import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-mokab-header.html';
import body from '@/components/exact/ar-sa-stores-mokab-body.html';
import footer from '@/components/exact/ar-sa-stores-mokab-footer.html';
import inline from '@/components/exact/ar-sa-stores-mokab.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
