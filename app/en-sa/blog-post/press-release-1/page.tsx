import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-press-release-1-header.html';
import body from '@/components/exact/en-sa-blog-post-press-release-1-body.html';
import footer from '@/components/exact/en-sa-blog-post-press-release-1-footer.html';
import inline from '@/components/exact/en-sa-blog-post-press-release-1.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
