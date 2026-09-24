import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-plugins-pos-geidea-header.html';
import body from '@/components/exact/ar-sa-plugins-pos-geidea-body.html';
import footer from '@/components/exact/ar-sa-plugins-pos-geidea-footer.html';
import inline from '@/components/exact/ar-sa-plugins-pos-geidea.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
