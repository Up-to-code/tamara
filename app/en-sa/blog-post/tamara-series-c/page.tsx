import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-series-c-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-series-c-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-series-c-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-series-c.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
