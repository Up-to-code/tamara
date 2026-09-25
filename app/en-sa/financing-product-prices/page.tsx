import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-financing-product-prices-header.html';
import body from '@/components/exact/en-sa-financing-product-prices-body.html';
import footer from '@/components/exact/en-sa-financing-product-prices-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"692d1a0322af52500e80da46","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
