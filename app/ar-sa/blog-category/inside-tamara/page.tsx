import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-category-inside-tamara-header.html';
import body from '@/components/exact/ar-sa-blog-category-inside-tamara-body.html';
import footer from '@/components/exact/ar-sa-blog-category-inside-tamara-footer.html';
import inline from '@/components/exact/ar-sa-blog-category-inside-tamara.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
