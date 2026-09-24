import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-stores-lamarquise-header.html';
import body from '@/components/exact/ar-sa-stores-lamarquise-body.html';
import footer from '@/components/exact/ar-sa-stores-lamarquise-footer.html';
import inline from '@/components/exact/ar-sa-stores-lamarquise.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
