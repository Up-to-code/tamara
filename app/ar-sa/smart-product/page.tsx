import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-smart-product-header.html';
import body from '@/components/exact/ar-sa-smart-product-body.html';
import footer from '@/components/exact/ar-sa-smart-product-footer.html';

const htmlAttrs = {"lang":"ar-AE","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"6865013a240bd40ef51e4906","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
