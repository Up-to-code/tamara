import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-laure-header.html';
import body from '@/components/exact/ar-sa-stores-laure-body.html';
import footer from '@/components/exact/ar-sa-stores-laure-footer.html';
import inline from '@/components/exact/ar-sa-stores-laure.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
