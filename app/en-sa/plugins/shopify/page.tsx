import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-shopify-header.html';
import body from '@/components/exact/en-sa-plugins-shopify-body.html';
import footer from '@/components/exact/en-sa-plugins-shopify-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"6886123f56053e23bd2d75f8","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
