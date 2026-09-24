import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-home-header.html';
import body from '@/components/exact/ar-sa-home-body.html';
import footer from '@/components/exact/ar-sa-home-footer.html';
import inline from '@/components/exact/ar-sa-home.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
