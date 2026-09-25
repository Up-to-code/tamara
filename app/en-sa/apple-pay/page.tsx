import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-apple-pay-header.html';
import body from '@/components/exact/en-sa-apple-pay-body.html';
import footer from '@/components/exact/en-sa-apple-pay-footer.html';
import inline from '@/components/exact/en-sa-apple-pay.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
