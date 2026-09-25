import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-your-credit-score-header.html';
import body from '@/components/exact/en-sa-your-credit-score-body.html';
import footer from '@/components/exact/en-sa-your-credit-score-footer.html';
import inline from '@/components/exact/en-sa-your-credit-score.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
