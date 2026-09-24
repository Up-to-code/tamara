import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-industry-mobile-phone-header.html';
import body from '@/components/exact/ar-sa-industry-mobile-phone-body.html';
import footer from '@/components/exact/ar-sa-industry-mobile-phone-footer.html';
import inline from '@/components/exact/ar-sa-industry-mobile-phone.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
