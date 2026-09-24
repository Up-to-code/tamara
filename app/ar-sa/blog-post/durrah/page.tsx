import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-durrah-header.html';
import body from '@/components/exact/ar-sa-blog-post-durrah-body.html';
import footer from '@/components/exact/ar-sa-blog-post-durrah-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-durrah.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
