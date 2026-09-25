import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/en-sa-plugins-woocommerce-header.html';
import body from '@/components/exact/en-sa-plugins-woocommerce-body.html';
import footer from '@/components/exact/en-sa-plugins-woocommerce-footer.html';

const htmlAttrs = {"lang":"en-SA","data-wf-domain":"tamara.co","data-wf-page":"688635680c9a07b93b75bc7d","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
