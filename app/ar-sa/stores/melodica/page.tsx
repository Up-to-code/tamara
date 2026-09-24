import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-melodica-header.html';
import body from '@/components/exact/ar-sa-stores-melodica-body.html';
import footer from '@/components/exact/ar-sa-stores-melodica-footer.html';
import inline from '@/components/exact/ar-sa-stores-melodica.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
