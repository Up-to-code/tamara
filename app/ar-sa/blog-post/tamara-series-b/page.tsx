import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-tamara-series-b-header.html';
import body from '@/components/exact/ar-sa-blog-post-tamara-series-b-body.html';
import footer from '@/components/exact/ar-sa-blog-post-tamara-series-b-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-tamara-series-b.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
