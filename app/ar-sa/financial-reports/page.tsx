import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-financial-reports-header.html';
import body from '@/components/exact/ar-sa-financial-reports-body.html';
import footer from '@/components/exact/ar-sa-financial-reports-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"68a2b2494c6af74128bf5a1c","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
