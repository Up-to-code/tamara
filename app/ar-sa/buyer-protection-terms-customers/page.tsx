import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-buyer-protection-terms-customers-header.html';
import body from '@/components/exact/ar-sa-buyer-protection-terms-customers-body.html';
import footer from '@/components/exact/ar-sa-buyer-protection-terms-customers-footer.html';
import inline from '@/components/exact/ar-sa-buyer-protection-terms-customers.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
