import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-buyer-protection-terms-merchants-header.html';
import body from '@/components/exact/ar-sa-buyer-protection-terms-merchants-body.html';
import footer from '@/components/exact/ar-sa-buyer-protection-terms-merchants-footer.html';
import inline from '@/components/exact/ar-sa-buyer-protection-terms-merchants.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
