import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-underarmour-header.html';
import body from '@/components/exact/ar-sa-stores-underarmour-body.html';
import footer from '@/components/exact/ar-sa-stores-underarmour-footer.html';
import inline from '@/components/exact/ar-sa-stores-underarmour.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
