import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-white-friday-header.html';
import body from '@/components/exact/ar-sa-blog-post-white-friday-body.html';
import footer from '@/components/exact/ar-sa-blog-post-white-friday-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-white-friday.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
