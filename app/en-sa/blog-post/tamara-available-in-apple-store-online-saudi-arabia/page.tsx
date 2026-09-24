import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-available-in-apple-store-online-saudi-arabia-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-available-in-apple-store-online-saudi-arabia-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-available-in-apple-store-online-saudi-arabia-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-available-in-apple-store-online-saudi-arabia.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
