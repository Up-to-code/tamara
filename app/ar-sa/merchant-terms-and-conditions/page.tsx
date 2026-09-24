import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-merchant-terms-and-conditions-header.html';
import body from '@/components/exact/ar-sa-merchant-terms-and-conditions-body.html';
import footer from '@/components/exact/ar-sa-merchant-terms-and-conditions-footer.html';
import inline from '@/components/exact/ar-sa-merchant-terms-and-conditions.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
