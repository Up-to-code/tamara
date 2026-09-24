import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-tamara-for-physical-stores-header.html';
import body from '@/components/exact/ar-sa-tamara-for-physical-stores-body.html';
import footer from '@/components/exact/ar-sa-tamara-for-physical-stores-footer.html';
import inline from '@/components/exact/ar-sa-tamara-for-physical-stores.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
