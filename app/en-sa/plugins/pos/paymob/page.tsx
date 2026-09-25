import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-pos-paymob-header.html';
import body from '@/components/exact/en-sa-plugins-pos-paymob-body.html';
import footer from '@/components/exact/en-sa-plugins-pos-paymob-footer.html';
import inline from '@/components/exact/en-sa-plugins-pos-paymob.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
