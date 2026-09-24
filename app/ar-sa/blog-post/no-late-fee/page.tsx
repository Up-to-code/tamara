import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-no-late-fee-header.html';
import body from '@/components/exact/ar-sa-blog-post-no-late-fee-body.html';
import footer from '@/components/exact/ar-sa-blog-post-no-late-fee-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-no-late-fee.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
