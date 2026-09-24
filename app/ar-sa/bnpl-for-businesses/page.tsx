import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-bnpl-for-businesses-header.html';
import body from '@/components/exact/ar-sa-bnpl-for-businesses-body.html';
import footer from '@/components/exact/ar-sa-bnpl-for-businesses-footer.html';
import inline from '@/components/exact/ar-sa-bnpl-for-businesses.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
