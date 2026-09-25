import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-white-paper-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-white-paper-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-white-paper-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-white-paper.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="en-SA" dir="ltr" />;
}
