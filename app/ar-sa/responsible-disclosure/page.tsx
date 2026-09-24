import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-responsible-disclosure-header.html';
import body from '@/components/exact/ar-sa-responsible-disclosure-body.html';
import footer from '@/components/exact/ar-sa-responsible-disclosure-footer.html';
import inline from '@/components/exact/ar-sa-responsible-disclosure.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
