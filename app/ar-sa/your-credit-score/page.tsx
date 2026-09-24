import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-your-credit-score-header.html';
import body from '@/components/exact/ar-sa-your-credit-score-body.html';
import footer from '@/components/exact/ar-sa-your-credit-score-footer.html';
import inline from '@/components/exact/ar-sa-your-credit-score.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
