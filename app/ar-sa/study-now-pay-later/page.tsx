import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-study-now-pay-later-header.html';
import body from '@/components/exact/ar-sa-study-now-pay-later-body.html';
import footer from '@/components/exact/ar-sa-study-now-pay-later-footer.html';
import inline from '@/components/exact/ar-sa-study-now-pay-later.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
