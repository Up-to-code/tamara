import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-post-tamara-achieves-investment-grade-credit-rating-header.html';
import body from '@/components/exact/ar-sa-blog-post-tamara-achieves-investment-grade-credit-rating-body.html';
import footer from '@/components/exact/ar-sa-blog-post-tamara-achieves-investment-grade-credit-rating-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68725fce5fe95b0ea21ff15c","data-wf-site":"67c184892f7a84b971ff49d9","data-wf-collection":"68725fcd5fe95b0ea21ff138","data-wf-item-slug":"tamara-achieves-investment-grade-credit-rating"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
