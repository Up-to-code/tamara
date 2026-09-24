import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-media-center-header.html';
import body from '@/components/exact/ar-sa-media-center-body.html';
import footer from '@/components/exact/ar-sa-media-center-footer.html';
import inline from '@/components/exact/ar-sa-media-center.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
