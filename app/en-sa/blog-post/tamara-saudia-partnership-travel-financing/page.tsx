import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-blog-post-tamara-saudia-partnership-travel-financing-header.html';
import body from '@/components/exact/en-sa-blog-post-tamara-saudia-partnership-travel-financing-body.html';
import footer from '@/components/exact/en-sa-blog-post-tamara-saudia-partnership-travel-financing-footer.html';
import inline from '@/components/exact/en-sa-blog-post-tamara-saudia-partnership-travel-financing.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} />;
}
