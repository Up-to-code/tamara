import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-tamara-achieves-investment-grade-credit-rating-header.html';
import body from '@/components/exact/ar-sa-blog-post-tamara-achieves-investment-grade-credit-rating-body.html';
import footer from '@/components/exact/ar-sa-blog-post-tamara-achieves-investment-grade-credit-rating-footer.html';
import inline from '@/components/exact/ar-sa-blog-post-tamara-achieves-investment-grade-credit-rating.inline.txt';

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} inline={inline} lang="ar-SA" dir="rtl" />;
}
