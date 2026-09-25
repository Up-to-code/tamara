import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-blog-category-inside-tamara-header.html';
import body from '@/components/exact/ar-sa-blog-category-inside-tamara-body.html';
import footer from '@/components/exact/ar-sa-blog-category-inside-tamara-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68722c9c95e1498effab40cc","data-wf-site":"67c184892f7a84b971ff49d9","data-wf-collection":"68722c9b95e1498effab4084","data-wf-item-slug":"inside-tamara"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
