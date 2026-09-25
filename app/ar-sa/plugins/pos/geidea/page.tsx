import TamaraPage from '@/components/TamaraPage';
import header from '@/components/exact/ar-sa-plugins-pos-geidea-header.html';
import body from '@/components/exact/ar-sa-plugins-pos-geidea-body.html';
import footer from '@/components/exact/ar-sa-plugins-pos-geidea-footer.html';

const htmlAttrs = {"lang":"ar-SA","dir":"rtl","data-wf-domain":"tamara.co","data-wf-page":"698ddc84857895b90b48393a","data-wf-site":"67c184892f7a84b971ff49d9"};

export default function Page() {
  return <TamaraPage header={header} body={body} footer={footer} htmlAttrs={htmlAttrs} />;
}
