import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-logo-header.html';
import body from '@/components/exact/ar-sa-stores-logo-body.html';
import footer from '@/components/exact/ar-sa-stores-logo-footer.html';
import inline from '@/components/exact/ar-sa-stores-logo.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
