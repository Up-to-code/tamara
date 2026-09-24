import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-tamara-thmanyah-strategic-partnership-header.html';
import body from '@/components/exact/ar-sa-blog-post-tamara-thmanyah-strategic-partnership-body.html';
import footer from '@/components/exact/ar-sa-blog-post-tamara-thmanyah-strategic-partnership-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-tamara-thmanyah-strategic-partnership.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
