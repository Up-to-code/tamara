import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-press-release-2-header.html';
import body from '@/components/exact/ar-sa-blog-post-press-release-2-body.html';
import footer from '@/components/exact/ar-sa-blog-post-press-release-2-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-press-release-2.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
